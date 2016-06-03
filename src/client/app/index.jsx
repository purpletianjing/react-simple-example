var AwesomeComponent = require('./AwesomeComponent.jsx');
require('../../less/index.less');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <p> Hello React </p>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <App />
    <AwesomeComponent />
  </div>,
  document.getElementById('app')
);
