import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/services">Services</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default NavBar;