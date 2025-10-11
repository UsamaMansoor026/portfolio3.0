import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeading heading="Experience" />

      <div className="space-y-10 mt-8">
        {/* Experience Freelancing */}
        <div className="bg-sec-bg px-6 py-10 rounded-lg shadow-lg border border-bluish">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 className="text-xl font-semibold text-bluish">
              Jr. React Developer | CloudQuik
            </h3>
            <span className="text-sm text-gray-400 mt-1 md:mt-0">
              Feb 2024 – Sep 2025
            </span>
          </div>
          <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
            <li>
              Built and maintained responsive web applications using React.js,
              ensuring smooth performance and clean UI.
            </li>
            <li>
              Worked with state management tools like Redux and Context API to
              handle complex data flows.
            </li>
            <li>
              Integrated REST APIs and displayed dynamic data across different
              components.
            </li>
            <li>
              Collaborated with designers and backend developers to match design
              requirements and improve user experience. Fixed bugs, optimized
              code, and improved application speed and responsiveness.
            </li>
            <li>
              Gained hands-on experience with tools like Git/GitHub, VS Code,
              and Figma for development and collaboration.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
