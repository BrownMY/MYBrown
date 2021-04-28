import React from "react";

const Home = () => {
  return (
    <div class="about-container">
        <h1>Mocha Brown</h1>
      <main class="about-main">
        <img class="me-img" src="https://res.cloudinary.com/doihe1pi6/image/upload/v1619644039/portrait_jz31o2.png" alt="pixel art style portrait of Mocha"></img>
        <h3 class="h3-about"> Full-Stack Web Developer </h3>
        <p class="about-brand">
         I am an essential worker turned full-stack web developer through General Assembly's Software Engineering Immersive Remote Program. I have built apps with MERN stack, Django and PostgreSQL.  As both an artist and developer, I am driven by my desire to find technical solutions for both pressing and casual needs. My creativity allows me to express my abilities in new and unique ways. 
        </p>
        <h4 class="skills">
            Skills
        </h4>
        <p className="p-home">
          Javascript ⁎ Html ⁎ CSS ⁎ Python ⁎ React ⁎ Node.js ⁎ Express.js ⁎
          PostgreSQL ⁎ Sequelize ⁎ ORM ⁎ MongoDB ⁎ Mongoose ⁎ RESTful ⁎ Routing
          ⁎ JSON ⁎ APIs
        </p>
        <h4>Resume</h4>
        <p class="click-resume">Click <a href="public\Mocha-Brown-Resume.pdf" download>here</a> to view my resume.</p>
        
      </main>
    </div>
  );
};

export default Home;
