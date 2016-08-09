var React = require('react');
var MyTableRow = require('./MyTableRow');
var SearchBar = require('./SearchBar');

var MyTableContent = React.createClass({

  componentDidMount: function() {
  	this.tableSort();
  },

  componentDidUpdate: function() {
  	this.tableSort();
  },

  tableSort: function() {
  	  	$(this.refs.myTable).tablesorter();
  },

  render: function() {
    // console.log('my table content splicedArray', this.props.splicedArray)
    return (
     	<div className="flex--1 soft-double--sides">
     	<SearchBar value={this.props.splicedArray}/>
        <h1 className='header1'> My Tags </h1>
        <table className="table table--rule table--hover myTable" ref='myTable'>
          <thead>
            <tr>
              <th className = "cell-collapse">Logo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Called On</th>
              <th className="cell-collapse">Status</th>
            </tr>
          </thead>
          <tbody>
            {//key is for adjacent elements in react to distinguish
              this.props.splicedArray.map((rowinfo, item) => {
                return <MyTableRow onSelect={() => this.props.onSelect(item, rowinfo)} key={item} rowinfo={rowinfo}/>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
})
module.exports = MyTableContent;
