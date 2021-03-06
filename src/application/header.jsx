import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className={"header"}>
        <nav>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;