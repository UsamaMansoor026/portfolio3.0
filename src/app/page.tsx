import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Usama Web Developer</title>
        <meta
          name="description"
          content="Hi, I'm Usama, a web developer who builds responsive websites and modern web apps using React, Next.js, Javascript, Typescript and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Usama, web developer, portfolio, React, Next.js, Javascript, Typescript, Tailwind CSS, responsive websites, modern web apps, frontend developer"
        />
        <meta property="og:title" content="Usama Web Developer" />
        <meta
          property="og:description"
          content="Portfolio of Usama — a web developer building modern, fast websites using React and Next.js."
        />
        <meta
          property="og:url"
          content="https://usamawebdeveloper.netlify.app"
        />
      </Head>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="py-10 bg-bluish">
        <p className="text-bg text-center font-semibold text-lg">
          &copy; {new Date().getFullYear()} | Usama Web Developer | All right
          reserved
        </p>
      </footer>
    </>
  );
}
