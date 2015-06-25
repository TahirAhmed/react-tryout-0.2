var React = require('react');
var ItemList = require('./components/item-list.js');
var Application = React.createClass({
	componentWillMount: function() { console.log('Application.componentWillMount'); },
	componentDidMount: function() { console.log('Application.componentDidMount'); },
	componentWillReceiveProps: function() { console.log('Application.componentWillReceiveProps'); },
	shouldComponentUpdate: function() { console.log('Application.shouldComponentUpdate'); },
	componentWillUpdate: function() { console.log('Application.componentWillUpdate'); },
	componentDidUpdate: function() { console.log('Application.componentDidUpdate'); },
	componentWillUnmount: function() { console.log('Application.componentWillUnmount'); },
	getDefaultProps: function() { console.log('Application.getDefaultProps'); },
	getInitialState: function() { console.log('Application.getInitialState'); return null; },
	render: function() {
		console.log('Application.render');
		return <div className="container"><ItemList /></div>;
	}
});

React.render(<Application />, document.getElementsByClassName('main-container')[0]);