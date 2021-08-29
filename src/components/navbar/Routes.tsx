import React from 'react';
import { Route, Switch } from 'react-router-dom';


import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Portfolio from '../pages/portfolio/Portfolio';
import Services from '../pages/services/Services';
import Skills from '../pages/skills/Skills';

const Routes: React.FC = () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Services} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
    </Switch>
    )
}

export default Routes;