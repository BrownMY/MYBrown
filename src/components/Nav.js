import React from 'react';
import Home from './Home'
import HomeIcon from './icons/HomeIcon';
import PortfolioIcon from './icons/PortfolioIcon';
import ResumeIcon from './icons/ResumeIcon';
import ContactIcon from './icons/ContactIcon';

const Nav = () => {
    return (
        <div>
            <nav>
                <a href="#first"><HomeIcon /></a>
                <a href="#second"><PortfolioIcon /></a>
                <a href="#third"><ResumeIcon /></a>
                <a href="#fourth"><ContactIcon /></a>
            </nav>

            <div class='container'>
                <section id='first'>
                    <Home />
                </section>

                <section id='second'>
                    <h1>Second</h1>
                </section>

                <section id='third'>
                    <h1>Third</h1>
                </section>

                <section id='fourth'>
                    <h1>Fourth</h1>
                </section>
            </div>
        </div>
    );
}

export default Nav;
