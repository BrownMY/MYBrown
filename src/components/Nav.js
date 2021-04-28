import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import HomeIcon from "./icons/HomeIcon";
import PortfolioIcon from "./icons/PortfolioIcon";
import ContactIcon from "./icons/ContactIcon";

const Nav = () => {
  return (
    <div>
      <section class="homepage-section">
        <span class="sliding">
          <span>MOCHA </span>
          <span>BROWN</span>
          <span> ❁ </span>
          <span>MOCHA </span>
          <span>BROWN</span>
        </span>
        <div class="wrapper">
          <span class="sliding2">
            <span>MOCHA </span>
            <span>BROWN</span>
            <span> ❁ </span>
            <span>MOCHA </span>
            <span>BROWN</span>
          </span>
        </div>
      </section>
      <nav> 
        <a href="#first">
          <HomeIcon />
        </a>
        <a href="#second">
          <PortfolioIcon />
        </a>
        <a href="#fourth">
          <ContactIcon />
        </a>
      </nav>

      <div class="container">
        <section id="first">
          <Home />
        </section>

        <section id="second">
          <Projects />
        </section>

        <section id="fourth">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Nav;
