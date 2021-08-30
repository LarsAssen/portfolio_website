import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Portfolio from '../pages/portfolio/Portfolio';
import Services from '../pages/services/Services';
import Skills from '../pages/skills/Skills';

const Routes: React.FC = () => {
    const location = useLocation();

    return (
    <TransitionGroup>
        <CSSTransition
        timeout={1000}
        classNames='slide'
        key={location.key}
        >
            <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/services" component={Services} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
    )
}

export default Routes;