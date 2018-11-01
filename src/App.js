import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props, "props")
    this.state = {
      scrollY: 0
    }
  }
  componentDidMount() {
    window.requestAnimationFrame(this.draw);
    document.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    console.log(window.scrollY);
    this.setState({scrollY: window.scrollY})
    this.draw()
  }

  draw = () => {
    console.log("draw")
    const ctx = this.refs.myCanvas.getContext('2d'); 
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);
    ctx.rotate(Math.PI / 180);
    ctx.translate(-250, -250);
    // ctx.rotate(360*this.state.scrollY);
    ctx.fillStyle = "black";
    ctx.fillRect(125, 125, 250, 125);
    ctx.fillStyle = "orange";
    ctx.fillRect(125, 250, 250, 125);
    // window.requestAnimationFrame(this.draw);
  }
  
  render() {
    console.log("props", this.props)
    return (
      <div id="appContainer">
        <canvas id="myCanvas" ref="myCanvas" width="500px" height="500px"/> 
      </div>
    );
  }
}

export default App;
