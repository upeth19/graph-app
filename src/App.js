import React, { Component } from 'react'
import './App.css'
import BarChart from './BarChart'
import WorldMap from './WorldMap'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='d-flex justify-content-around my-3'>
          <BarChart data={[1, 10, 1, 3]} size={[300, 300]} />
          <WorldMap/>
        </div>
      </div>
    )
  }
}