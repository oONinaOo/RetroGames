import React, { Component } from 'react';
import _ from 'underscore';
import {Container, Content, Button, View} from 'native-base';
import {Alert} from 'react-native';
import Style from './Style';
import InputButton from './Keyboard';

const inputButtons = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', 'l', 'm'],
    ['n', 'o', 'p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y', 'z']
];

const guessed = [];

export default class Hangman extends React.Component {
constructor(props) {
    super(props);
    this.state = { disabled: false }

  }

render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>

                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }
    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input}
                                 key={r + "-" + i}
                                 onPress={this._onInputButtonPressed.bind(this, input)}
                                 disabled={this.state.disabled}
                                  />

                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
        }

    _onInputButtonPressed(input) {

    guessed.push(input);
    this.setState({disabled: true});
    }

}
