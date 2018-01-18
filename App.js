import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Drawer, List, ListItem, Switch, Header, Content, Left, Right, Body, Button, Icon, Title } from 'native-base';
import { Root } from "native-base";
import Expo from "expo";
import HomeScreen from "./Navigation//Navigation.js";


export default class App extends React.Component {
     constructor() {
        super();
        this.state = {
            isReady: false
        };
     }

     async componentWillMount() {
          await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),

          });
          this.setState({ isReady: true });
     }

     render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return <HomeScreen />
        ;
    }
}




