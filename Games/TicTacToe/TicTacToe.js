import React, { Component } from 'react';
import {Container, Content, Button, View, Text} from 'native-base';
import {Alert, Image} from 'react-native';
import Field from './Field';



import Expo, { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

import Style from './Style';

var wsound = new Expo.Audio.Sound();
var lsound = new Expo.Audio.Sound();


export default class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playerOne: "", playerTwo: "", lastPick: "", winSound: null, loseSound: null,
                        fields: [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', '']
                        ] }
        this.init = this.init.bind(this);

    }

    componentDidMount(){
        this.init();
        this._loadWinSound().done();
        this._loadLoseSound().done();

      }

    init() {
        this.setState({lastPick: "player"})

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
                </View>
                <View style={Style.displayContainer}>
                    {this._validate()}
                </View>
                <View style={Style.wordContainer}>
                </View>
                <View style={Style.hintContainer}>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputFields()}
                </View>
            </View>
        )
    }

    _validate() {

    //see rows
        for (var x = 0; x < this.state.fields.length; x ++) {
             let row = this.state.fields[x];
             if (row[0] !== "" && row[0] === row[1] && row [1] === row[2]  ){
                Alert.alert("won");
             }



        }
    // see columns
       for (var x = 0; x < this.state.fields.length; x ++) {
             let arr = this.state.fields;
             if (arr[0][x] !== "" && arr[0][x] === arr[1][x] && arr[1][x] === arr[2][x] ){
                Alert.alert("won");
             }

        }

    // check diagonals
        let arr = this.state.fields;
        if (arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[2][2]) {
            Alert.alert("won");
        }
        if (arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[2][0]) {
            Alert.alert("won");
        }
    }

    _renderInputFields() {
        let views = [];

        for (var r = 0; r < this.state.fields.length; r ++) {
            let row = this.state.fields[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <Field value={input.toUpperCase()}
                                 key={r + "-" + i}
                                 onPress={this._onInputButtonPressed.bind(this, r, i)}
                                 disabled={(this.state.disabled || true)  && this._ifBlank(input)}

                                  />

                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
        }

    _onInputButtonPressed(axisX, axisY, turn) {

        this.setState ({disabled: !this.state.disabled});
        let overwrite = this.state.fields;
        for (var x = 0; x < this.state.fields.length; x ++) {
             if (x === axisX) {
                let row = this.state.fields[x];
                for (var y = 0; y < row.length; y ++) {
                    if (y === axisY) {
                        let newArr = this.state.fields.slice(); //copy the array
                        let input = "";
                        if (this.state.lastPick === "player"){
                            input = "X"
                        }
                        else{
                             input = "O"
                        }
                        newArr[x][y] = input;
                        this.setState({fields: newArr}) //set the new state
                    }

                }

             }



        }
        if(this.state.lastPick === "player"){
            this.setState({lastPick : "ai"});
        }
        else{
            this.setState({lastPick : "player"});
        }

    }

    _ifBlank(input) {
        if (input === "") {
            return false;
        }
        else {
            return true;
        }

    }
    /*_analizeResult(){
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

    }*/

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

}
