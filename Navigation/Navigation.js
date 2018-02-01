import React, { Component } from "react";
import HomeScreen from "../HomeScreen/Index.js";
import SideBar from "../Navigation/SideBar.js";
import Payment from '../Screens/Payment.js';
import { DrawerNavigator } from "react-navigation";
import GameList from '../Games/Hangman/Hangman.js';
const HomeScreenRouter = DrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Account: {screen: Payment},
    Games: {screen: GameList},
    Premium: {screen: Payment},
    Payment: { screen: Payment }
  },
  {
      contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;