import React from 'react'
import GitHubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedInIcon';
import EmailIcon from './icons/EmailIcon';


const Contact = () => {
    return (
        <div>
            <h2 class="h3-contact">Links & Contact:</h2>
         <div class="contact-container">
             <div class="link-container">
                 <GitHubIcon /><h4><a class="a-contact" href="https://github.com/BrownMY" target="_blank" rel="noreferrer">Github</a></h4>
             </div>
             <div class="link-container">
                 <LinkedinIcon /><h4><a class="a-contact" href="https://www.linkedin.com/in/mocha-brown/" target="_blank" rel="noreferrer">LinkedIn</a></h4>
             </div>
             <div class="link-container">
                 <EmailIcon /><h4><a class="a-contact" href="Brown.MochaY@gmail.com" target="_blank" rel="noreferrer">Email</a></h4>
             </div>
    
        </div>   
        </div>
        
    )
}

export default Contact;