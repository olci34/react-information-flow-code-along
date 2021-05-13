import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.bgColor}}
        onClick={() => this.props.handleColorChange(getRandomColor())}
      ></div>
    )
  }
}

export default Child
