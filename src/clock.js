import React, {Component} from 'react';
import './clock.css';
import Control from './clock.control'

class Clock extends Component {
  constructor(props){
  	super(props);
  	this.state = {date: new Date()};
  }

  render() {
    return (
   <div>
     <div className='clock-box-style'>
     	<span className='clock-text-style'>{this.state.date.toLocaleTimeString()}</span>
     </div>
     <Control  start={this.start.bind(this)} stop={this.stop.bind(this)} />
    </div>
    );
  }

  componentDidMount(){
    this.start()
  } 
  componentWillUnmount(){
    this.stop()
  }

  start(){
    this.timer = setInterval(this.tick.bind(this),1000);
  }
  stop() {
    clearInterval(this.timer)
  }

  tick(){
  	this.setState({date : new Date()})
  }
}

export default Clock;