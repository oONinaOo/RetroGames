import React, { Component } from 'react';

import { Svg } from 'expo';
const {
  Line,
} = Svg;

import Style from './DrawingStyle';


export default class LLeg extends React.Component {
    render() {
        return (
            <Svg style={Style.legLeft}>
                <Line
                    x1= "0"
                    y1= "0"
                    x2= "20"
                    y2= "20"
                    stroke="black"
                    strokeWidth="5"

                />
            </Svg>
        );
    }
}