var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello World</p>
        <p><Link to="/about">About</Link></p>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div>
        <p>About</p>
        <p><Link to="/">Go back</Link></p>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('app')
)
