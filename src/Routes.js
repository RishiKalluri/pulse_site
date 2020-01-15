import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './Components/App'
// import Register from './Components/Register'
import Schedule from './Components/subComponents/Schedule'
import ParticleWrapper from './Components/subComponents/ParticleWrapper'
/** REVIEW  import Schedule from './Schedule';
import Events from './Events';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Contact from './Contact';
import About from './About';
import SponsorUs from './SponsorUs' */


const routes = () => (
    <div>
        <ParticleWrapper />
        <Router> {/** FIXME Refer to this later if something is broken */}
            <div class="mainbody">

                {/* <Route exact path="/" component={App} /> */}
                {/* <Route exact path="/register" component={Register} /> */}
                <Route exact path="/" component={Schedule} />
                {/* REVIEW <Route path="/schedule" component={Schedule} />
                <Route path="/events" component={Events} />
                <Route path="/speakers" component={Speakers} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/sponsor_us" component={SponsorUs}/> */}
                {/* <Route path="/pulse_countdown_page" component={App} /> */}
            </div>
        </Router>
    </div>
);

export default routes;
