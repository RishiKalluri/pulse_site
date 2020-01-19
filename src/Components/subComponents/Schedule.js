import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Button, Menu } from 'semantic-ui-react'
import Sidebar from 'react-sidebar'

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
        this.doNothing = this.doNothing.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
    }
    
    doNothing() {
        var x = 5;
    }

    render() {
        return (
            <div>
                <Menu pointing inverted vertical fixed="left">
                    <Link activeClass="active" to="monday" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Monday"
                            onClick={this.doNothing}
                        />
                    </Link>
                    <Link activeClass="active" to="tuesday" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Tuesday"
                            onClick={this.doNothing}
                        />
                    </Link>
                    <Link activeClass="active" to="wednesday" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Wednesday"
                            onClick={this.doNothing}
                        />
                    </Link>
                    <Link activeClass="active" to="thursday" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Thursday"
                            onClick={this.doNothing}                        
                        />
                    </Link>
                    <Link activeClass="active" to="friday" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Friday"
                            onClick={this.doNothing}                        
                        />
                    </Link>
                    <Link activeClass="active" to="saturday" spy={true} smooth={true} duration={500}>
                        <Menu.Item 
                            name="Saturday"
                            onClick={this.doNothing}                        
                        />
                    </Link>

                </Menu>
                
                <div className="weekdays" id="weekdays">

                <div>
                <Element name="monday">
                    <h1>Monday</h1>
                    {big_para}
                </Element>

                <Element name="tuesday">
                    <h1>Tuesday</h1>
                    {big_para}
                </Element>

                <Element name="wednesday">
                    <h1>Wednesday</h1>
                    {big_para}
                </Element>

                <Element name="thursday">
                    <h1>Thursday</h1>
                    {big_para}
                </Element>

                <Element name="friday">
                    <h1>Friday</h1>
                    {big_para}
                </Element>

                <Element name="saturday">
                    <h1>Saturday</h1>
                    {big_para}
                </Element>
            </div>
            </div>
            </div>
        )
    }

}

export default Schedule;