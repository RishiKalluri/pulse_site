import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Menu, Button } from 'semantic-ui-react'
import Sidebar from 'react-sidebar'
import Home from "./Home"
import Card from "./directorCards/Card"
import Footer from "./Footer"

import "./Schedule.css"

var sidebar_size = -83.5

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.doNothing = this.doNothing.bind(this);
    }

    doNothing() {
        var x = 0;
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });

    }

    scrollToHeader5() {
        scroller.scrollTo('header5', {
            duration: 1500,
            delay: 100,
            smooth: true,
            containerId: 'headers',
            offset: 50
        });
    }

    render() {
        return (
            <div className="weekdays">

                <Menu pointing inverted vertical fixed="left">
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={2.5*sidebar_size}>
                        <Menu.Item 
                            name="Home"
                            onClick={this.doNothing}
                        />
                    </Link>
                    <Link activeClass="active" to="recap" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Pulse 2019"
                            onClick={this.doNothing}
                        />
                    </Link>
                </Menu>

                <div>
                  <div className="home-content">
                    <Element name="home">
                        <Home/>
                    </Element>
                  </div>
                  <div className="box">
                    <Element name="recap">
                      <Card/>
                    </Element>
                  </div>
                  <div className="footer">
                    <Element name="footer">
                      <Footer/>
                    </Element>
                  </div>
                </div>
            </div>
        )
    }

}

export default Schedule;
