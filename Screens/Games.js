import React, { Component } from 'react';
import {AppRegistry, Image, StatusBar } from 'react-native';
import { Container, Card, CardItem,  List, ListItem, Switch, Header, Content, Left, Right, Body, Button, Icon, Title, Text, Thumbnail} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { DrawerNavigator, StackNavigator } from 'react-navigation';

export default class GameList extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail large source={{uri: 'https://d10jmt30kcky7o.cloudfront.net/images/hangmanicon400.png'}} />
                <Body>
                  <Text>Hangman</Text>
                  <Text note>Guess the word!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://drakaronline.com/image/Hangman_C94zcUEiMoD.jpg'}} style={{alignSelf: 'stretch', resizeMode: 'cover', height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                <Button transparent>
                  <Text> Play now!</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}