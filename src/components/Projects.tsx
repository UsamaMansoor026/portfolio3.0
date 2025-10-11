"use client";

import SectionHeading from "./SectionHeading";
import { projects } from "../data";
const LazyLoadImage = dynamic(
  () =>
    import("react-lazy-load-image-component").then((mod) => mod.LazyLoadImage),
  { ssr: false }
);
import "react-lazy-load-image-component/src/effects/blur.css";
import dynamic from "next/dynamic";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeading heading="Latest Projects" />

      {/* Image Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
        {projects?.length > 0 &&
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-lg flex flex-col gap-2 bg-writing pb-2 h-[300px] relative"
              >
                {/* Code Button */}
                <div className="absolute top-2 right-2 z-10 bg-bg w-[45px] h-[45px] border border-bluish rounded-full flex items-center justify-center">
                  <a
                    href={project.github_link}
                    target="_blank"
                    className="text-bluish text-xl"
                  >
                    <i className="fa-solid fa-code" />
                  </a>
                </div>

                {/* Project Image */}
                <div className="group relative h-[250px] overflow-hidden border-[2px] border-bluish rounded-lg">
                  <LazyLoadImage
                    className={`w-full absolute top-0 transition-transform duration-[3000ms] group-hover:-translate-y-[calc(100%-250px)] ${
                      project.title === "Maan Notes"
                        ? "h-full object-cover"
                        : ""
                    }`}
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <a
                  href={project.live_link}
                  target="_blank"
                  className="name font-semibold text-center text-lg duration-200 border-b-[2px] border-b-transparent hover:border-b-bluish w-fit mx-auto my-2"
                >
                  {project.title}
                </a>
              </div>
            );
          })}
      </div>

      {/* More Projects Button */}
      <div className="flex items-center justify-center mt-7">
        <a
          href="https://github.com/UsamaMansoor026"
          target="_blank"
          className="cursor-pointer bg-bluish border border-bluish px-7 py-2 duration-200 hover:bg-transparent hover:text-bluish hover:shadow-md hover:shadow-bluish"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Projects;
