var AwesomeComponent = React.createClass({
  getInitialState: function() {
    return {
      likesCount : 0
    };
  },
  onLike : function() {
    var newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  },
  render: function () {
    return (
      <div className="counter">
        <h1>{this.state.likesCount}</h1>
       <button onClick={this.onLike}>Increment</button>
      </div>
    );
  }
});

module.exports = AwesomeComponent;
