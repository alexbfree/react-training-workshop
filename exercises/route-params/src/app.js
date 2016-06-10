var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Users = require('./users');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link activeClassName="active" to="/">Home</Link></li>
          <li><Link activeClassName="active" to="/users/jackfranklin">About Jack</Link></li>
          <li><Link activeClassName="active" to="/users/alexbfree">About Alex</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <p>Home</p>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/users/:username" component={Users} />
    </Route>
  </Router>,
  document.getElementById('app')
)
