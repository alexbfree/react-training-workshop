var GithubPerson = React.createClass({
  propTypes: {
    login: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      loading:true
    };
  },
  componentWillMount: function() {
    getGitHubUser(this.props.login).then(function(info) {
      this.setState({name:info.name,loading:false});
    }.bind(this));
  },
  render: function() {
    if (this.state.loading) {
      return <p>LOADING</p>;
    }
    else
    {    
      return (
        <div>
          <p>Name: {this.state.name}</p>
        </div>
      );
    }
  }
});  

var getGitHubUser = function(name) {
  return fetch('http://github-proxy-api.herokuapp.com/users/' + name).then(function(data) {
    return data.json();
  });
};

var App = React.createClass({
  render: function() {
    return <GithubPerson login="alexbfree" />
  }
});
