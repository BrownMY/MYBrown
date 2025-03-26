import React from "react";

function ProjectCard({
  title,
  description,
  tech,
  hostedLink,
  githubLinkFront,
  githubLinkBack,
  imgLink,
}) {
  return (
    <>
      <div class="project">
        <div class="app-descrip">
          <p class="project-title">{title}</p>
          <p>{description}</p>
          <br />
          <span class="technology"> {tech}</span>
          <br />
          <a
            class="project-link"
            href={hostedLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
          <a
            class="project-link"
            href={githubLinkFront}
            target="_blank"
            rel="noreferrer"
          >
            Code (Frontend)
          </a>
          {githubLinkBack ? (
            <a
              class="project-link"
              href={githubLinkBack}
              target="_blank"
              rel="noreferrer"
            >
              Code (Backend)
            </a>
          ) : (
            ""
          )}
        </div>
        <img
          class="img"
          src={imgLink}
          alt={`Frontpage for the webapp, ${title}`}
        />
      </div>
    </>
  );
}

export default ProjectCard;
