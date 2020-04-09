import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'



export default class App extends Component {
  data = [
    {
      key: 'Delhi',
      value: 'Delhi',
    },
    {
      key: 'Chennai',
      value: 'chennai',
    },
    {
      key: 'Puducherry',
      value: 'Puducherry',
    },
    {
      key: 'kasmir',
      value: 'kasmir',
    },
    {
      key: 'ooty',
      value: 'ooty',
    },
  ]

  render() {
    return (
      <ReactSearchBox
        placeholder="search"
        
      
        data={this.data}
        callback={record => console.log(record)}
        

      />
    )
  }
}

      