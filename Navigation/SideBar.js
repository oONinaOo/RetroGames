import React, { Component } from 'react';
import {AppRegistry, Image, StatusBar } from 'react-native';
import { Container, Drawer, List, ListItem, Switch, Header, Content, Left, Right, Body, Button, Icon, Title, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { DrawerNavigator, StackNavigator } from 'react-navigation';

export default class SideBar extends React.Component {

  render(){

        return(
        <Container>
            <Content style= {{backgroundColor: '#ffffff'}}>
                <Image
                            source={{
                              uri: "https://www.askideas.com/media/13/Colorful-Hearts-Facebook-Cover-Picture.jpg"
                            }}
                            style={{
                              height: 120,
                              alignSelf: "stretch",
                              justifyContent: "center",
                              alignItems: "center"

                            }}>
                </Image>
                <Image
                    square
                    style={{ height: 90, width: 90, alignSelf: "stretch", position: 'absolute', top: 20, left: 100 }}
                    source={{
                        uri: "https://s3.amazonaws.com/data-us-east-1-iconfinder/data/icons/iconversions_public/avatars-9/145/Avatar_Penguin-512.png"
                    }}
                 >
                 </Image>
                <List style= {{marginTop: 15}}>
                    <ListItem icon>
                        <Left>
                            <Icon name='ios-contact'/>
                        </Left>
                        <Body>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate("Account")}>
                                <Text>Account settings</Text>
                            </Button>
                        </Body>
                        <Right>

                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name='ios-game-controller-b'/>
                        </Left>
                        <Body>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate("Games")}>
                                <Text>Games</Text>
                            </Button>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                           <Icon name='ios-star'/>
                        </Left>
                        <Body>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate("Premium")}>
                                <Text>Premium</Text>
                            </Button>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name='ios-card'/>
                        </Left>
                        <Body>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate("Payment")}>
                                <Text>Payment</Text>
                            </Button>
                        </Body>
                    </ListItem>
                </List>
            </Content>
            </Container>
        )
    };

}

module.exports = SideBar;

