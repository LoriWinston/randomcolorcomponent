import React, { Component } from 'react';
import ColorBox from '../color/ColorBox';

export default class RandomColor extends Component {
  state = {
    color: '#00FF00',
  }

  getRandomColor(array) {
    const randomSlide = array[Math.floor(Math.random() * array.length)];

    return randomSlide;
  }

  colorChange() {
    const colorArray = ['#FF0000', '#e68a19', '	#FFFF00', '#32CD32', '#0000FF', '#800080'];

    const newColor = this.getRandomColor(colorArray);

    this.setState({ color: newColor});
  }

  componentDidMount = () => setInterval(() => {
    this.colorChange();
  }, 1000);

  render() {
    const { color } = this.state;

    return (
      <ColorBox color={color}/>
    )
  }
}
















{/* <div
    onClick={this.clickHandler}
    style={{
       backgroundColor: this.state.bgColor
      }} 
    className="App"
/>

export default randomColor; 

 */}
