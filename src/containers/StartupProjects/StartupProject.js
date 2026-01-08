import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>

          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {/* STATUS BADGE */}
                {project.status && (
                  <span
                    className={`project-status ${project.status.toLowerCase()}`}
                  >
                    {project.status}
                  </span>
                )}

                {/* PROJECT IMAGE */}
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                )}

                {/* PROJECT DETAILS */}
                <div className="project-detail">
                  <h5
                    className={
                      isDark ? "dark-mode card-title" : "card-title"
                    }
                  >
                    {project.projectName}
                  </h5>

                  <p
                    className={
                      isDark
                        ? "dark-mode card-subtitle"
                        : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>

                  {/* TECH STACK */}
                  {project.techStack && (
                    <div className="tech-stack">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          <span className="tech-icon">{tech.icon}</span>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* PROJECT HIGHLIGHTS */}
                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((point, index) => (
                        <li key={index}>✔ {point}</li>
                      ))}
                    </ul>
                  )}

                  {/* CTA BUTTONS */}
                  {project.footerLink && (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, index) => (
                        <button
                          key={index}
                          className="project-btn"
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name} →
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
