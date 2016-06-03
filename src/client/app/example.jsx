var myComponent = React.createClass({
  handleClick: function() {
    console.log('111111111');
  },
  render: function () {
    return (
      <div>
        <input type="text" />
        <input
          type="button"
          value="Focus the text input" />
      </div>
    );
  }
});

ReactDOM.render(
  <myComponent />,
  document.getElementById('example')
)
