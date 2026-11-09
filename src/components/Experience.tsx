const Experience = () => {
  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-shell about-layout">
        <div>
          <p className="portfolio-kicker">01 / About</p>
          <h2 className="portfolio-heading">From the web<br />to <em>mobile.</em></h2>
          <div className="about-copy">
            <p>
              I&apos;m Usama Mansoor, an Android developer. Since early 2025,
              I&apos;ve been developing mobile apps for Android and iOS. I use
              Kotlin and Jetpack Compose to build Android interfaces, and
              Kotlin Multiplatform to share code between the two platforms.
            </p>
            <p>
              I came to mobile from frontend web development. From 2023
              through the end of 2024, I built responsive, accessible
              interfaces with React, Next.js, TypeScript, JavaScript, and
              Tailwind CSS. My work also covered state management,
              authentication, and connecting interfaces to REST and GraphQL APIs.
            </p>
            <p>
              That experience shapes how I build mobile screens today. I think
              through what people see while data loads, how they recover when
              something goes wrong, and how an interface adapts to different
              screens. I bring the same attention to readable layouts and
              reusable UI that I developed on the web.
            </p>
          </div>
        </div>
        <div className="experience-track">
          <h3 className="portfolio-kicker">Experience</h3>
          <ol>
            <li>
              <p className="experience-date">Early 2025 – Present</p>
              <h4>Mobile development</h4>
              <p>
                Build Android UI in Jetpack Compose and use Kotlin
                Multiplatform for code shared across Android and iOS.
              </p>
            </li>
            <li>
              <p className="experience-date">Frontend background · 2023–2024</p>
              <h4>Frontend web development</h4>
              <p>
                As a junior React developer at CloudQuik, I built and
                maintained responsive interfaces, managed application state
                with Redux and Context API, and integrated REST APIs. I worked
                with designers and backend developers to turn requirements
                into usable screens and fix issues across the application.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
