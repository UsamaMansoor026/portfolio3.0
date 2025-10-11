const Hero = () => {
  return (
    <section id="home" className="relative overflow-x-hidden">
      {/* Name */}
      <span
        className="xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-lobster font-bold transition-all duration-200 pointer-events-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10 opacity-30 -rotate-45 text-shadow-xs text-shadow-bluish"
        id="logo"
      >
        Usama
      </span>

      {/* Helping Circles */}
      <div className="absolute -left-36 w-[300px] h-[300px] bg-bluish blur-3xl shadow-2xl shadow-bluish rounded-full z-[-1] opacity-50" />
      <div className="absolute -right-36 w-[300px] h-[300px] bg-greenish blur-3xl shadow-2xl shadow-bluish rounded-full z-[-1] opacity-50" />

      <h1 className="text-3xl md:text-6xl leading-[1.3] font-bold text-center">
        Hy I am <span className="name">Usama Mansoor</span>
      </h1>

      <h3 className="text-xl sm:text-4xl text-center font-bold my-4">
        And I&apos;m a <span className="name">Frontend Developer</span>
      </h3>

      <p className="text-justify text-[15px] md:text-[17px] max-w-full md:max-w-[80%] mx-auto mt-6 leading-[2]">
        Passionate <b>Frontend Developer</b> with almost <b>2 years</b> of
        experience in building responsive and user-friendly web applications.
        Skilled in <b>JavaScript</b>, <b>TypeScript</b>, <b>React.js</b>,{" "}
        <b>Next.Js</b> and state management tools like <b>Redux</b>,{" "}
        <b>Zustand</b> and <b>Context API</b>. Experienced in integrating APIs,
        working with modern UI libraries, and ensuring applications are
        optimized for performance and scalability. I focus on writing clean,
        reusable code and collaborating with teams to deliver seamless user
        experiences.
      </p>
    </section>
  );
};

export default Hero;
