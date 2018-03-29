import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

const pvp = "2 player mode";
const vsAi = "You vs. Ai";

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { playerOne: 'Enter name ...', playerTwo: 'Enter name ...', gameStyle: "" };
  }

  render() {
    return (
    <View>
        <View>
            <Button
            onPress={this._getGameMode.bind(this,pvp)}
            title= {pvp}
            color="#841584"
            />

           <Button
           onPress={this._getGameMode.bind(this,vsAi)}
           title={vsAi}
           color="#841584"
           />
        </View>
        <View>
           {this._getNameFields()}
        </View>
    </View>
    );
  }
    _getGameMode(input){

        if(input === pvp) {

            this.setState({gameStyle: pvp})

        }
        if(input === vsAi) {
            this.setState({gameStyle: vsAi})
            this.setState({playerTwo: "Ai"})

        }
    }

    _getNameFields(){

        if (this.state.gameStyle !== "" && this.state.gameStyle === pvp) {

         return (
                     <View>
                     <TextInput
                             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                             onChangeText={(playerOne) => this.setState({playerOne})}
                             value={this.state.playerOne}
                           />
                     <TextInput
                             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                             onChangeText={(playerTwo) => this.setState({playerTwo})}
                             value={this.state.playerTwo}
                           />
                     <Button
                             title= "Start!"
                             color="#841584"
                           />
                     </View>

                     );

        }

        if (this.state.gameStyle !== "" && this.state.gameStyle === vsAi) {

        return (
                    <View>
                    <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(playerOne) => this.setState({playerOne})}
                            value={this.state.playerOne}
                          />
                    <Button
                            title= "Start!"
                            color="#841584"
                          />
                     </View>

                    );

        }
        else {
            return (<View></View>);
        }
    }

  }

