var withRouter = require('react-router').withRouter
var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      formValue: ''
    };
  },
  onTextChange: function(e) {
    // update the state with the new text value
    this.setState({formValue:e.target.value});
  },
  onSubmit: function(e) {
    e.preventDefault();
    var user = this.state.formValue;
    this.props.router.push("/users/" + user);
  },
  render: function() {
    return (
      <div>
        <p>Enter a username to find on GitHub</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.formValue} onChange={this.onTextChange} />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
});

var homeComponentWithRouter = withRouter(Home);

module.exports = homeComponentWithRouter;

