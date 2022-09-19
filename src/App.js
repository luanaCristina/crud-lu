// App.js
import React, { Component } from 'react'
import './App.css'
import ProductTable from './components/ProductTable'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Veja o código no GitHub </h1>
        <a href='https://github.com/luanaCristina/crud-lu'>Link Github</a>
        <ProductTable />
      </div>
    )
  }
}