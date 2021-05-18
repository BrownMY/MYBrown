import React from "react";

const Projects = () => {
  return (
    <div class="project-bg">
      <div class="project-container">
        <div class="project" id="project1">
          <div class="app-descrip">
            <p class="project-title">Selenê</p>
            <p>An online self-care retail shop. Created as a team of three.</p>
            <br />
            <span>Django | Python | PostgreSQL</span>
            <br />
            <a
              class="project-link"
              href="https://seleneshop.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              class="project-link"
              href="https://github.com/BrownMY/Selene"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            class="img1"
            src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526306/selene1_etkknp.png"
            alt="Frontpage for the webapp, Selene"
          />
          {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526306/selene2_smpb7i.png"
            alt="A page for the webapp, Selene"/> */}
        </div>

        <div class="project" id="project2">
          <div class="app-descrip">
            <p class="project-title">Farmony</p>
            <p>
              A social media app for connecting communities and their local
              farmers. Created as a team of three.
            </p>
            <br />
            <span> MongoDB | Mongoose | React | Javascript | Node.js</span>
            <br />
            <a
              class="project-link"
              href="https://farmonyforum.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              class="project-link"
              href="https://github.com/BrownMY/Farmony-frontend"
              target="_blank"
          rel="noreferrer"
            >
              Github (Front-end)
            </a>
            <a class="project-link" href="https://github.com/BrownMY/Farmony"
            target="_blank"
            rel="noreferrer">
              
              Github (Back-end)
            </a>
          </div>
          <img
            class="img1"
            src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526303/farmony1_ticyyk.png"
            alt="Frontpage for the webapp, Farmony"
          />
          {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526304/farmony2_rchv8z.png"
            alt="A page for the webapp, Farmony"/> */}
        </div>
        <div class="project" id="project3">
          <div class="app-descrip">
            <p class="project-title">Muse</p>
            <p>
              Muse is a creative prompt app for helping visual artists overcome
              artist's block. Uses API from Harvard and Rijks collections.
            </p>
            <br />
            <span>Express.js | Sequelize | PostgreSQL | Node.js</span>
            <br />
            <a
              class="project-link"
              href="https://m-u-s-e.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a class="project-link" href="https://github.com/BrownMY/Muse-" 
            target="_blank"
            rel="noreferrer">
              Github
            </a>
          </div>
          <img
            class="img1"
            src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526308/muse1_t8d5fc.png"
            alt="Frontpage for the webapp, Muse"
          />
          {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526301/muse2_t9yd64.png"
            alt="A page for the webapp, Muse"/> */}
        </div>

        <div class="project" id="project4">
          <div class="app-descrip">
            
            <p class="project-title">Door Defense</p>
            <p>
              Door Defense is my first ever app built. It is inspired by my
              experience as an essential worker during a global pandemic.
            </p>
            <br />
            <span>HTML | CSS | Javascript</span>
            <br />
            <a
              class="project-link"
              href="https://brownmy.github.io/Door-Defense/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              class="project-link"
              href="https://github.com/BrownMY/Door-Defense/tree/master"
              target="_blank"
          rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            class="img1"
            src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526294/door-defense1_necscw.png"
            alt="Frontpage for the web game, Door Defense"
          />
          {/* <img
              class="img2"
              src="https://res.cloudinary.com/doihe1pi6/image/upload/v1618526293/door-defense2_brtk1d.png"
            alt="A page for the web game, Door Defense"/> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
