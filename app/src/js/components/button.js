var React = require('react');
var gsapReactPlugin = require('gsap-react-plugin');
var MyButton = React.createClass({
	componentDidMount: function() {
		console.log('MyButton.componentDidMount');
		TweenLite.to(this, 1, {state: {width: 100}, onUpdate: this.onUpdate});
		//console.log(this.state);
	},
	onUpdate: function(){
		//console.log('onUpdate');
		//this.setState({width: this.state.width});
	},
	/*componentWillMount: function() { console.log('MyButton.componentWillMount'); },
	componentDidMount: function() { console.log('MyButton.componentDidMount'); },
	componentWillReceiveProps: function() { console.log('MyButton.componentWillReceiveProps'); },
	shouldComponentUpdate: function() { console.log('MyButton.shouldComponentUpdate'); },
	componentWillUpdate: function() { console.log('MyButton.componentWillUpdate'); },
	componentDidUpdate: function() { console.log('MyButton.componentDidUpdate'); },
	componentWillUnmount: function() { console.log('MyButton.componentWillUnmount'); },
	getDefaultProps: function() { console.log('MyButton.getDefaultProps'); },
	onMouseDown: function() { console.log('MyButton.onMouseDown'); },
	onMouseUp: function() { console.log('MyButton.onMouseUp'); },
	onMouseEnter: function() { console.log('MyButton.onMouseEnter'); },
	onMouseLeave: function() { console.log('MyButton.onMouseLeave'); },*/
	getDefaultProps: function() { console.log('MyButton.getDefaultProps'); },
	getInitialState: function() {
		console.log('MyButton.getInitialState');
		return {width: 0};
	},
	render: function() {
		console.log('MyButton.render');
		return <button
			className="clickable-button"
			onMouseDown={this.onMouseDown}
			onMouseUp={this.onMouseUp}
			onMouseEnter={this.onMouseEnter}
			onMouseLeave={this.onMouseLeave}
			style={{width:this.state.width}}
		>
		Add an item
		</button>;
	}
});
module.exports = MyButton;