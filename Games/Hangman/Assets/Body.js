import React, { Component } from 'react';

import { Svg } from 'expo';
const {
  Line,
} = Svg;

import Style from './DrawingStyle';


export default class Body extends React.Component {
    render() {
        return (
            <Svg style={Style.body}>
                <Line
                    x1= "0"
                    y1= "0"
                    x2= "0"
                    y2= "45"
                    stroke="black"
                    strokeWidth="10"

                />
            </Svg>
        );
    }
}
