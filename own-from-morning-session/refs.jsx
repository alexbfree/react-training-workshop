var Form = React.createClass({
  onClick: function() {
    alert(this.refs.textInput.value);
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="textInput" />
        <button onClick={this.onClick}>Go</button>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return <Form />
  }
});
