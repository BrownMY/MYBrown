import React from "react";

const Home = () => {
  return (
    <div class="about-container">
      <main class="about-main">
        <div className="about-header-container">
          <img
            class="me-img"
            src="https://res.cloudinary.com/doihe1pi6/image/upload/v1619644039/portrait_jz31o2.png"
            alt="pixel art style portrait of"
          ></img>
          <div className="about-me-body">
            <h2 class="home-name">Mocha Brown</h2>
            <p class="pronouns">She / Her</p>
            <h4 class="h4-about"> Full-Stack Software Engineer </h4>
            <p class="about-brand">
              Hi there! I’m a full-stack software engineer from Detroit,
              Michigan who loves blending creativity and technology. With a
              background in art and design, I bring a unique perspective to
              software development. I enjoy combining technical know-how with
              creative thinking to come up with fresh, innovative solutions to
              all kinds of challenges.
            </p>
          </div>
        </div>
        <h4 class="skills">Skills</h4>
        <p className="p-home">
          Javascript ⁎ Typescript * Java ⁎ Python ⁎ React ⁎ Angular * Vue ⁎
          Spring Boot * Node.js ⁎ Express.js ⁎ Hapi ⁎ PostgreSQL ⁎ Oracle *
          Sequelize ⁎ MongoDB ⁎ Mongoose ⁎ RESTful APIs ⁎ Docker ⁎ Amazon S3 ⁎
          Jest ⁎ Mocha ⁎ Agile ⁎ Chai ⁎ Github Actions ⁎
        </p>
        <h4>Resume</h4>
        <p class="click-resume">
          Click{" "}
          <a
            href="https://www.canva.com/design/DAF964Wjcbc/H85DSPNJDKUQ2NpoUO-9aw/view?utm_content=DAF964Wjcbc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcbf9bcb071"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          to view my resume.
        </p>
      </main>
    </div>
  );
};

export default Home;
