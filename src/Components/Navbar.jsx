import React, { useState } from 'react';
import './Navbar.css';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-scroll';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar-container">
                <Link className="logo" to='/'>ABHISHEK</Link>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'} onClick={handleClick} />
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className="nav-box">
                        <Link className="nav-item" to="/" onClick={handleClick}>HOME</Link>
                        <Link className="nav-item" to="skills" onClick={handleClick}>SKILLS</Link>
                        <Link className="nav-item" to="projects" onClick={handleClick}>PROJECTS</Link>
                        <Link className="nav-item" to="contact" onClick={handleClick}>CONTACT</Link>
                    </div>
                </div>
            </nav>
            <Intro />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Navbar;