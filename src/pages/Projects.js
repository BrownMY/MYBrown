import React from "react";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <div class="project-bg">
      <h1>Projects</h1>
      <div class="project-container">
        <ProjectCard
          title={"Farmony"}
          description={
            "A social media app for connecting communities and their local farmers and gardeners."
          }
          tech={"MongoDB | Mongoose | React | Javascript | Node.js"}
          hostedLink={"https://farmony-us.netlify.app/"}
          githubLinkFront={"https://github.com/BrownMY/Farmony-frontend"}
          githubLinkBack={"https://github.com/BrownMY/Farmony"}
          imgLink={
            "https://res.cloudinary.com/doihe1pi6/image/upload/v1738805672/puu9qqolxsali3afu1wt.png"
          }
        />
        <ProjectCard
          title={"Muse"}
          description={
            "A creative prompt app for helping artists overcome artist's block. Uses API from Harvard and Rijks collections."
          }
          tech={"React"}
          hostedLink={"https://luxury-macaron-9d78f2.netlify.app/"}
          githubLinkFront={"https://github.com/BrownMY/Muse-"}
          githubLinkBack={""}
          imgLink={
            "https://res.cloudinary.com/doihe1pi6/image/upload/v1738805243/ifubtghfxj71ozk3bzvv.png"
          }
        />
        <ProjectCard
          title={"Door Defense"}
          description={
            "My first app built. It is inspired by my experience as an essential worker during the pandemic."
          }
          tech={""}
          hostedLink={"https://brownmy.github.io/Door-Defense/"}
          githubLinkFront={
            "https://github.com/BrownMY/Door-Defense/tree/master"
          }
          githubLinkBack={""}
          imgLink={
            "https://res.cloudinary.com/doihe1pi6/image/upload/v1618526294/door-defense1_necscw.png"
          }
        />
        <ProjectCard
          title={"Selene"}
          description={
            "An online self-care retail shop. Built as a team of three."
          }
          tech={"Django | Python | PostgreSQL"}
          hostedLink={"https://seleneshop.herokuapp.com/"}
          githubLinkFront={"https://github.com/BrownMY/Selene"}
          githubLinkBack={""}
          imgLink={
            "https://res.cloudinary.com/doihe1pi6/image/upload/v1618526306/selene1_etkknp.png"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
