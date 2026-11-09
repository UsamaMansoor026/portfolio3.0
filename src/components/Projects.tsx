"use client";

import { ArrowUpRight, CodeXml, PanelsTopLeft } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data";

const Projects = () => {
  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-heading">
      <div className="portfolio-shell">
        <p className="portfolio-kicker">03 / Projects</p>
        <h2 id="projects-heading" className="portfolio-heading">Web <em>projects.</em></h2>
        <p className="projects-intro">Explore my frontend work through live demos and source code.</p>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-face">
                <div className="project-preview">
                  <div className="project-window-bar" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                  <div className="project-viewport">
                    <div className="project-preview-fallback" aria-hidden="true">
                      <PanelsTopLeft size={32} strokeWidth={1.5} />
                      <span>Web project</span>
                    </div>
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      unoptimized
                      sizes="(min-width: 1000px) 33vw, (min-width: 600px) 50vw, 100vw"
                      onError={(event) => { event.currentTarget.hidden = true; }}
                    />
                  </div>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a
                      className="project-link"
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live demo <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <a
                      className="project-link project-source"
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <CodeXml size={16} aria-hidden="true" /> Source
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-actions project-more">
          <a className="portfolio-button" href="https://github.com/UsamaMansoor026" target="_blank" rel="noreferrer">
            <span className="portfolio-button-face">
              <CodeXml size={17} aria-hidden="true" /> More on GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
