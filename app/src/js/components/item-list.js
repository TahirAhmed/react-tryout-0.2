var React = require('react');
var Item = require('./item.js');
var ItemList = React.createClass({
	/*componentWillMount: function() { console.log('ItemList.componentWillMount'); },
	componentDidMount: function() { console.log('ItemList.componentDidMount'); },
	componentWillReceiveProps: function() { console.log('ItemList.componentWillReceiveProps'); },
	shouldComponentUpdate: function() { console.log('ItemList.shouldComponentUpdate'); },
	componentWillUpdate: function() { console.log('ItemList.componentWillUpdate'); },
	componentDidUpdate: function() { console.log('ItemList.componentDidUpdate'); },
	componentWillUnmount: function() { console.log('ItemList.componentWillUnmount'); },*/
	/*getDefaultProps: function() { console.log('ItemList.getDefaultProps'); },
	getInitialState: function() {
		console.log('ItemList.getInitialState');
		return null;
	},*/
	render: function() {
		console.log('ItemList.render');
		return <ul className="todo-list"><Item /></ul>;
	}
});
module.exports = ItemList;