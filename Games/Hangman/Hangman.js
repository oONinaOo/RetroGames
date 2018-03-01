import React, { Component } from 'react';
import _ from 'underscore';
import {Container, Content, Button, View, Text} from 'native-base';
import {Alert, Image} from 'react-native';
import InputButton from './Keyboard';
import Head from './Assets/Head.js';
import Body from './Assets/Body';
import LArm from './Assets/LArm';
import RArm from './Assets/RArm';
import LLeg from './Assets/LLeg';
import RLeg from './Assets/RLeg';
import Header from './Assets/Header';


import Expo, { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

import Style from './Style';

const inputButtons = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', 'l', 'm'],
    ['n', 'o', 'p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y', 'z']
];

const data = require('./Words.json');

var wsound = new Expo.Audio.Sound();
var lsound = new Expo.Audio.Sound();


export default class Hangman extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disabled: false, guessedLetters: [], guessed: "" , answer : "", hint: "", wrong: 0, winSound: null, loseSound: null }
        this.init = this.init.bind(this);

    }

    componentDidMount(){
        this.init();
        this._loadWinSound().done();
        this._loadLoseSound().done();

      }

    init() {

    var puzzles = this._getRandom();
    this.setState({disabled: false, guessedLetters: [], guessed: "" , wrong: 0})
    this.setState({answer: puzzles.answer});
    this.setState({hint: puzzles.hint});
        if (this.state.winSound != null) {
            this.state.winSound.stopAsync();
        }
        if (this.state.loseSound != null) {
            this.state.loseSound.stopAsync();
        }

    }



render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.headerContainer}>
                    <Header/>
                </View>
                <View style={Style.displayContainer}>
                <Image source={require('./Assets/1.png')}/>
                    {this._renderImage()}
                    {this._analizeResult()}
                </View>
                <View style={Style.wordContainer}>
                     {this._validate()}
                </View>
                <View style={Style.hintContainer}>
                        <Text style={Style.hintText}> Hint: {this.state.hint}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }

    _getRandom() {

        var obj_keys = Object.keys(data.words);
        var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        return data.words[ran_key];

     }

    _validate() {
        var arr = [];
        for (var i=0; i<this.state.answer.length; i++) {
            if ((this.state.answer[i] === this.state.guessed) || this._ifLetterExistInArray(this.state.answer[i]) ) {
                arr.push(this.state.answer[i].toUpperCase());
                arr.push(" ");

            }
            else {
                arr.push("_ ");

            }

        }
        return (<View><Text style={Style.wordText}> {arr.join("").toString()} </Text></View>) ;

    }

    _ifLetterExistInArray(letter) {
        if (this.state.guessedLetters.indexOf(letter) > -1) {
            return true;
        } else {
            return false;
        }

    }


    _renderGuessedLetters() {

        if (this.state.guessed != "") {

             this.state.guessedLetters.push(this.state.guessed.toString());
        }

    }

    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input.toUpperCase()}
                                 key={r + "-" + i}
                                 onPress={this._onInputButtonPressed.bind(this, input)}
                                 disabled={(this.state.disabled || true)  && this.searchArray(input) }

                                  />

                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
        }

    _onInputButtonPressed(input) {

        this.setState({guessed : input});
        this.setState ({disabled: !this.state.disabled});
        if (this.state.answer.indexOf(input.toString()) === -1) {
            this.setState({wrong: this.state.wrong + 1});
        }

    }

    _renderImage(){
        this._renderGuessedLetters();
        if (this.state.wrong<6) {
            switch(this.state.wrong) {
                 case 1: return (<Head/>);
                 case 2: return ( [<Head key="0"/>,<Body key="1"/>]);
                 case 3: return ( [<Head key="0"/>,<Body key="1"/>,<LArm key="2"/>]);
                 case 4: return ( [<Head key="0"/>,<Body key="1"/>,<LArm key="2"/>,<RArm key="3"/>]);
                 case 5: return ( [<Head key="0"/>,<Body key="1"/>,<LArm key="2"/>,<RArm key="3"/>,<LLeg key="4"/>]);

                }
        }
        if (this.state.wrong === 6 || this.state.wrong > 6) {

        return ( [<Head key="0"/>,<Body key="1"/>,<LArm key="2"/>,<RArm key="3"/>,<LLeg key="4"/>,<RLeg key="5"/>]);

        }

    }

    _analizeResult(){
        var lettersLeft = this.state.answer.length;


        if (this.state.wrong<6) {
            for (var i=0; i<this.state.answer.length; i++) {
                        if ((this.state.answer[i] === this.state.guessed) || this._ifLetterExistInArray(this.state.answer[i]) ) {
                            lettersLeft --;

                        }
            }
            if (lettersLeft ===0 && this.state.answer.length > 0) {
               var win = this.state.winSound;
               win.playAsync();
               Alert.alert("You won!", "The answer was: " + this.state.answer, [{text: 'OK', onPress: () => this.init()},],{ cancelable: false });

            }

        }
        if (this.state.wrong === 6 || this.state.wrong > 6) {
            var lose = this.state.loseSound;
            lose.playAsync();
            Alert.alert("You lost!", "The answer was: " + this.state.answer, [{text: 'OK', onPress: () => this.init()},],{ cancelable: false });

        }

    }

    _loadWinSound= async () => {
        var soundObject = wsound;
        try {
            await soundObject.loadAsync(require('./Assets/won.mp3'));
                this.setState({winSound: soundObject});
                  // Your sound is playing!
        } catch (error) {
                  // An error occurred!
        }
        return soundObject;
    }

    _loadLoseSound= async () => {
        var soundObject = lsound;
        try {
            await soundObject.loadAsync(require('./Assets/lose.mp3'));
                this.setState({loseSound: soundObject});
                  // Your sound is playing!
        } catch (error) {
                  // An error occurred!
        }
        return soundObject;
    }


    searchArray(input){
    var arr = this.state.guessedLetters;
    if (arr.length > 0) {
                for (var i=0; i<arr.length; i++){
                    if (arr[i] === input.toString()) {
                        return true;
                    }

                }
    }
    return false;

    }

}
