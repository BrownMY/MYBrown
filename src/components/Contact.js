import React from "react";
import GitHubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";
import ResumeIcon from "./icons/ResumeIcon";

const Contact = () => {
  return (
    <div>
      <h2 class="h3-contact">Links & Contact:</h2>
      <div class="contact-container">
        <div class="contact-top-row">

        <div class="link-container">
          <GitHubIcon />
          <h4>
            <a
              class="a-contact"
              href="https://github.com/BrownMY"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </h4>
        </div>
        <div class="link-container">
          <LinkedinIcon />
          <h4>
            <a
              class="a-contact"
              href="https://www.linkedin.com/in/mocha-brown/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h4>
        </div>
        <div class="link-container">
          <ResumeIcon />
          <h4>
            <a
              class="a-contact"
              href="https://www.canva.com/design/DAEbq9eqvNM/864q0OVaKqghFJ5f9Kp4MA/view?utm_content=DAEbq9eqvNM&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank" rel="noreferrer">
              Resume
            </a>
          </h4>
        </div>
        </div>
        <br />
        <div class="contact-bottom-row">
          <div class="link-container">
            <EmailIcon />
            <h4>Brown.MochaY@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
