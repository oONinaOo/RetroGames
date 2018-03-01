import React, { Component } from 'react';

import { Svg } from 'expo';
const {
  Line
} = Svg;

import Style from './DrawingStyle';


export default class RArm extends React.Component {
    render() {
        return (
            <Svg style={Style.armRight}>
                <Line
                    x1= "20"
                    y1= "0"
                    x2= "0"
                    y2= "20"
                    stroke="black"
                    strokeWidth="5"
                />

            </Svg>
        );
    }
}



