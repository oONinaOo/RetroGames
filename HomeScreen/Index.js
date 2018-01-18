import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Drawer, List, ListItem, Switch, Header, Content, Left, Right, Body, Button, Icon, Title } from 'native-base';
import SideBar from '../Navigation//SideBar.js';
import { Root } from "native-base";
import Payment from '../Screens/Payment.js';
import { DrawerNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {

     render() {
     return (

        <Container style={{backgroundColor: '#000000' }}>
            <Header style={{ marginTop: 10, backgroundColor: '#000000', borderBottomWidth: 1, borderBottomColor: '#ffffff',  }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={()=> this.props.navigation.navigate("DrawerOpen")}>
                        <Icon style={{color: '#ffffff'}} name="menu"/>
                    </Button>
                </Left>
                <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                    <Title>Title</Title>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon style={{color: '#ffffff'}} name='home'/>
                    </Button>
                </Right>
            </Header>
        </Container>
     );
    }
}


module.exports = HomeScreen;
