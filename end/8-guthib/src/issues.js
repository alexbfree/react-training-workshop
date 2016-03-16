var React = require('react');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;
var actions = require('./actions');

var Issues = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.fetchIssues());
  },
  renderIssueLinks: function() {
    return this.props.issues.map(function(issue) {
      return (
        <li key={issue.id}>
          <Link to={"/issues/" + issue.id}>{issue.title}</Link>
        </li>
      );
    });
  },
  render: function() {
    return (
      <div className="issues">
        { this.renderIssueLinks() }
        { this.props.children }
      </div>
    )
  }
});

var ConnectedIssues = connect(function(state) {
  return {
    issues: state.issues
  }
})(Issues);

module.exports = ConnectedIssues;
