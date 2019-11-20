import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './ScheduleSideBar.css'

class ScheduleSideBar extends Component {

  

  render() {
    return (
      <div className="color">
        <h1>Monday</h1>
        <br/>
        <h1>Tuesday</h1>
        <br/>
        <h1>Wednesday</h1>
        <br/>
        <h1>Thursday</h1>
        <br/>
        <h1>Friday</h1>
        <br/>
        <h1>Saturday</h1>
      </div>
      )
    }
}
export default ScheduleSideBar