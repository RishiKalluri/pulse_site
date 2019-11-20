import React, { Component } from 'react'
import ScheduleSideBar from './ScheduleSideBar';
import Events from './Events'

class Schedule extends Component {
  render() {
    return (
      <div>
        <ScheduleSideBar></ScheduleSideBar>
        <Events></Events>
        <h1>hello</h1>
      </div>
    )
  }
}

export default Schedule