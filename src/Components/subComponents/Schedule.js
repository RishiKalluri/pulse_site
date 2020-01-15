import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Button } from 'semantic-ui-react'
import Sidebar from 'react-sidebar'
import Home from "./Home"
import Card from "./directorCards/Card"

import "./Schedule.css"

var lorem_ipsum = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."
var big_para =
    <p>
        {lorem_ipsum}
        {lorem_ipsum}
        {lorem_ipsum}
        {lorem_ipsum}
        {lorem_ipsum}
        {lorem_ipsum}
    </p>

var sidebar_size = -83.5

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroller.scrollToTop()
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

                <div className="scheduleSidebar">
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={2.5*sidebar_size}>
                        <Button inverted>
                            Home
                        </Button>
                    </Link>
                    <Link activeClass="active" to="recap" spy={true} smooth={true} duration={500}>
                        <Button inverted>
                            Pulse 2019
                        </Button>
                    </Link>
                </div>

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
                </div>
            </div>
        )
    }

}

export default Schedule;
