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
                href="https://www.canva.com/design/DAF964Wjcbc/H85DSPNJDKUQ2NpoUO-9aw/view?utm_content=DAF964Wjcbc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcbf9bcb071"
                target="_blank"
                rel="noreferrer"
              >
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
