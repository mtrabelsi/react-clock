import React, {Component} from 'react';

class Control extends Component {
	render(){
		return (
			<div>
			  <button onClick={this.start.bind(this)}>start</button>
			  <button onClick={this.stop.bind(this)}>stop</button>
			</div>
			);
	}

	start(e){
		this.props.start()
	}
	
	stop(e){
		this.props.stop()	
	}

}

export default Control;