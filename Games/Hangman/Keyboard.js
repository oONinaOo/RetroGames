import React from 'react';
import {Container, Content, Button, View} from 'native-base';
import Style from './Style';
import {TouchableOpacity, Text} from 'react-native';

export default class InputButton extends React.Component{
   render() {
          return (
              <Button style= {Style.inputButton}
                                  underlayColor="#193441"
                                  onPress={this.props.onPress}
                                  disabled={this.props.disabled}>
                  <View>
                              <Text style={Style.inputButtonText}>{this.props.value}</Text>
                  </View>
             </Button>
          );
      }

}