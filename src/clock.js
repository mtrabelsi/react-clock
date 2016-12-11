import React, {Component} from 'react';

class Clock extends Component {
  constructor(props){
  	super(props);
  	this.state = {date: new Date()};
  }

  render() {
    return (
     <div>
     {this.state.date.toLocaleTimeString()}
     </div>
    );
  }

  componentDidMount(){
  	setInterval(this.tick.bind(this),1000);
  }

  tick(){
  	this.setState({date : new Date()});
  }
}

export default Clock;