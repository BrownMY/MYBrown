import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div class="about-container">
        <h1>Mocha Brown</h1>
      <main class="about-main">
        <h3> Full-Stack Web Developer </h3>
        <p class="about-brand">
         I am an essential worker turned full-stack web developer through General Assembly's Software Engineering Immersive Remote Program. I have built apps with MERN stack, Django and PostgreSQL.  As both an artist and developer, I am driven by my desire to find technical solutions for both pressing and casual needs. My creativity allows me to express my abilities in new and unique ways. 
        </p>
        <p class="skills">
            Skills
        </p>
        <p className="p-home">
          Javascript ❁ Html ❁ CSS ❁ Python ❁ React ❁ Node.js ❁ Express.js ❁
          PostgreSQL ❁ Sequelize ❁ ORM ❁ MongoDB ❁ Mongoose ❁ RESTful ❁ Routing
          ❁ JSON ❁ APIs
        </p>
      </main>
    </div>
  );
};

export default Home;
