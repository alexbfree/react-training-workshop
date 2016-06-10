var Counter = React.createClass({
  propTypes: {
    init: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return { count: this.props.init }
  },
  increment: function() {
    this.setState({ count: this.state.count + 1 });
  },
  decrement: function() {
    this.setState({ count: this.state.count - 1 });
  },
  reset: function() {
    this.setState( this.getInitialState() );
  },
  render: function() {
    return (
      <div>
        { this.state.count }
        <br />
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
});


var App = React.createClass({
  render: function() {
    return (<Counter init={12} />);
  }
});
