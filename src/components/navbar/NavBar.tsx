import React from 'react';
import BrowserRouter from 'react-router-dom';
import Routes from './Routes';

const NavBar: React.FC = () => {
    return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    );
}

export default NavBar;