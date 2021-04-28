import React from "react";

const Projects = () => {
  return (
    <div class="project-bg">
      <div class="project-container">
        <a href="https://seleneshop.herokuapp.com/">
          <div class="project" id="project1">
            <div class="app-descrip"><p>An online self-care retail shop. Created as a team of three.</p><br /><span>Django | Python | PostgreSQL</span></div>
            <img
              class="img1"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526306/selene1_etkknp.png"
              alt="Frontpage for the webapp, Selene"/>
            {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526306/selene2_smpb7i.png"
            alt="A page for the webapp, Selene"/> */}
          </div>
        </a>
        <a href="http://farmony-2.herokuapp.com/">
          <div class="project" id="project2">
            <div class="app-descrip"><p>A social media app for connecting communities and their local farmers. Created as a team of three.</p><br /><span> MongoDB | Mongoose | React | Javascript | Node.js</span></div>
            <img
              class="img1"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526303/farmony1_ticyyk.png"
              alt="Frontpage for the webapp, Farmony"/>
            {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526304/farmony2_rchv8z.png"
            alt="A page for the webapp, Farmony"/> */}
          </div>
        </a>
        <a href="https://m-u-s-e.herokuapp.com/">
          <div class="project" id="project3">
            <div class="app-descrip"><p>Muse is a creative prompt app for helping visual artists overcome artist's block. Uses API from Harvard and Rijks collections.</p><br /><span>Express.js | Sequelize | PostgreSQL | Node.js</span></div>
            <img
              class="img1"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526308/muse1_t8d5fc.png"
            alt="Frontpage for the webapp, Muse"/>
            {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526301/muse2_t9yd64.png"
            alt="A page for the webapp, Muse"/> */}
          </div>
        </a>
        <a href="https://brownmy.github.io/Project-1-Game/">
          <div class="project" id="project4">
            <div class="app-descrip"><p>Door Defense is my first ever app built. It is inspired by my experience as an essential worker during a global pandemic.</p><br /><span>HTML | CSS | Javascript</span></div>
            <img
              class="img1"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526294/door-defense1_necscw.png"
              alt="Frontpage for the web game, Door Defense"/>
            {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526293/door-defense2_brtk1d.png"
            alt="A page for the web game, Door Defense"/> */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
