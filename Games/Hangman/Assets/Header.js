import React, { Component } from 'react';

import { Svg } from 'expo';
const {
  Text,
} = Svg;

import Style from './DrawingStyle';


export default class Header extends React.Component {
    render() {
        return (
            <Svg
                height="150"
                width="600"
            >
                <Text
                    fill="#42c5f4"
                    stroke="#000000"
                    strokeWidth="3"
                    fontSize="34"
                    fontWeight="bold"
                    x="175"
                    y="38"
                    textAnchor="middle"
                >H A N G M A N</Text>
            </Svg>
        );
    }
}