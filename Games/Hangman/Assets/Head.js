import React, { Component } from 'react';

import { Svg } from 'expo';
const {
  Circle,
} = Svg;

import Style from './DrawingStyle';


export default class Head extends React.Component {
    render() {
        return (
            <Svg style={Style.head}>
                <Circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="black"

                />
            </Svg>
        );
    }
}
