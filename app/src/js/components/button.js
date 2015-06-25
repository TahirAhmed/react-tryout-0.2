var React = require('react');
var MyButton = React.createClass({
	componentWillMount: function() { console.log('MyButton.componentWillMount'); },
	componentDidMount: function() {
		console.log('MyButton.componentDidMount');
	},
	componentWillReceiveProps: function() { console.log('MyButton.componentWillReceiveProps'); },
	shouldComponentUpdate: function() { console.log('MyButton.shouldComponentUpdate'); },
	componentWillUpdate: function() { console.log('MyButton.componentWillUpdate'); },
	componentDidUpdate: function() { console.log('MyButton.componentDidUpdate'); },
	componentWillUnmount: function() { console.log('MyButton.componentWillUnmount'); },
	getDefaultProps: function() { console.log('MyButton.getDefaultProps'); },
	getInitialState: function() {
		console.log('MyButton.getInitialState');
		return null;
	},
	onMouseDown: function() {
		console.log('MyButton.onMouseDown');
	},
	onMouseUp: function() {
		console.log('MyButton.onMouseUp');
	},
	onMouseEnter: function() {
		console.log('MyButton.onMouseEnter');	
	},
	onMouseLeave: function() {
		console.log('MyButton.onMouseLeave');	
	},
	render: function() {
		console.log('MyButton.render');
		return <button
			className="clickable-button"
			onMouseDown={this.onMouseDown}
			onMouseUp={this.onMouseUp}
			onMouseEnter={this.onMouseEnter}
			onMouseLeave={this.onMouseLeave}
		>
		Add an item
		</button>;
	}
});
module.exports = MyButton;