import React, { Component } from 'react';
import _ from 'underscore';
import {Container, Content, Button, View, Text} from 'native-base';
import {Alert} from 'react-native';
import Style from './Style';
import InputButton from './Keyboard';

const inputButtons = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', 'l', 'm'],
    ['n', 'o', 'p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y', 'z']
];

var guessedLetters = [];
const data = require('./Words.json');


export default class Hangman extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disabled: false, guessed: "" , answer : "", hint: "", wrong: 0}
        this.init = this.init.bind(this);
    }

    componentDidMount(){
        this.init();
      }

    init() {

    var puzzles = this._getRandom();
    this.setState({answer: puzzles.answer});
    this.setState({hint: puzzles.hint});

    }



render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.hintContainer}>
                    <Text>{this.state.hint}</Text>
                </View>
                <View style={Style.displayContainer}>
                    <Text>Guessed letters: </Text>
                    {this._renderGuessedLetters()}
                    <Text>{this.state.wrong}</Text>
                </View>
                <View style={Style.wordContainer}>
                     <Text>The word is: </Text>
                     {this._validate()}
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
                arr.push(this.state.answer[i]);
                arr.push(" ");

            }
            else {
                arr.push("_ ");

            }

        }
        return (<View><Text style={Style.wordText}> {arr.join("").toString()} </Text></View>) ;

    }

    _ifLetterExistInArray(letter) {
        if (guessedLetters.indexOf(letter) > -1) {
            return true;
        } else {
            return false;
        }

    }


    _renderGuessedLetters() {

        if (this.state.guessed != "") {

             guessedLetters.push(this.state.guessed.toString());
        }
        if (guessedLetters.length > 0) {
            return (<View><Text> {guessedLetters.toString()} </Text></View>);
        }


        return (<View><Text>Nothing guessed yet.</Text></View>);

    }

    _renderInputButtons() {
        let views = [];
        let disabled = guessedLetters.con

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input}
                                 key={r + "-" + i}
                                 onPress={this._onInputButtonPressed.bind(this, input)}
                                 disabled={(this.state.disabled || true)  && this.searchArray(input)}
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

    searchArray(input){
    var arr = guessedLetters;
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
