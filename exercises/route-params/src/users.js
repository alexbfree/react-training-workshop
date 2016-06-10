var React = require('react');

var Users = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {
    this.fetchUser(this.props.params.username);
  },
  componentWillReceiveProps: function(newProps) {
    if (newProps.params.username != this.props.params.username) {
      this.fetchUser(newProps.params.username);
    }
  },
  fetchUser: function(username) {
    fetch('https://github-proxy-api.herokuapp.com/users/' + username).then(function(data) {
      return data.json();
    }).then(function(data) {
      this.setState({ user: data });
    }.bind(this));
  },
  render: function() {
    if (this.state.user) {
      return (
        <p>Repositories count: {this.state.user.public_repos}</p>
      );
    } else {
      return <p>Loading</p>;
    }
  }
});

module.exports = Users;
