import { skills } from "@/data";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <SectionHeading heading="Skills" />

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] bg-bluish blur-3xl shadow-2xl shadow-bluish rounded-full z-[-1] opacity-50" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] bg-greenish blur-3xl shadow-2xl shadow-bluish rounded-full z-[-1] opacity-50" />

      {/* Skills container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 flex-wrap gap-7 mt-4">
        {skills?.length > 0 &&
          skills.map((skill) => (
            <article
              key={skill.id}
              className="bg-sec-bg px-3 py-5 rounded-2xl mb-3 flex flex-col items-center  gap-4 duration-200 hover:shadow-md hover:shadow-bluish"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={70}
                height={70}
                className="w-[70px] h-[70px] mx-auto"
              />
              <span className="text-lg capitalize text-center block text-bluish">
                {skill.name}
              </span>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Skills;
