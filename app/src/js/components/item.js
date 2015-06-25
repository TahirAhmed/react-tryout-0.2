var React = require('react');
var PlusButton = require('./button.js');
var Item = React.createClass({
	componentWillMount: function() { console.log('Item.componentWillMount'); },
	componentDidMount: function() { console.log('Item.componentDidMount'); },
	componentWillReceiveProps: function() { console.log('Item.componentWillReceiveProps'); },
	shouldComponentUpdate: function() { console.log('Item.shouldComponentUpdate'); },
	componentWillUpdate: function() { console.log('Item.componentWillUpdate'); },
	componentDidUpdate: function() { console.log('Item.componentDidUpdate'); },
	componentWillUnmount: function() { console.log('Item.componentWillUnmount'); },
	getDefaultProps: function() { console.log('Item.getDefaultProps'); },
	getInitialState: function() {
		console.log('Item.getInitialState');
		return null;
	},
	onMouseDown: function() {
		console.log('Item.onMouseDown');
	},
	onMouseUp: function() {
		console.log('Item.onMouseUp');
	},
	onMouseEnter: function() {
		console.log('Item.onMouseEnter');	
	},
	onMouseLeave: function() {
		console.log('Item.onMouseLeave');	
	},
	render: function() {
		console.log('Item.render');
		return <div
			className="todo-item"
			onMouseDown={this.onMouseDown}
			onMouseUp={this.onMouseUp}
			onMouseEnter={this.onMouseEnter}
			onMouseLeave={this.onMouseLeave}
		><PlusButton /></div>;
	}
});
module.exports = Item;