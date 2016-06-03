var List = require('./List.jsx');
require('../../less/filteredList.less');

var FilteredList = React.createClass({
  filterList: function(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function() {
    return {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  },
  componentWillMount: function() {
    this.setState({items: this.state.initialItems});
    // var { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    // console.log('z');
    // console.log(z);
  },

  render: function () {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList} />
        <List items={this.state.items}/>
      </div>
    )
  }
});

ReactDOM.render(<FilteredList />, document.getElementById('mount-point'));
