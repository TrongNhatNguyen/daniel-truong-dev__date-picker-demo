import React from 'react';
import './HeaderStyles.scss';
import logo from '../logo.svg';

const Header = () => {
    return (
        <header className='date-header'>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>MY DATE PICKER</h3>
        </header>
    );
}

export default Header;
