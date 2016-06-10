var getGitHubUser = function(name) {
  // at home use api.github.com/users/
  return fetch('http://github-proxy-api.herokuapp.com/users/' + name).then(function(data) {
    return data.json();
  });
};

var App = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {
    getGitHubUser('alexbfree').then(function(info) {
      this.setState(info);
    }.bind(this)); // <-- ensures that this within the anon function refers to the component
  },
  render: function() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
});
