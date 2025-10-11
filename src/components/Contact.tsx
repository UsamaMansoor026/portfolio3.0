import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] bg-gray-700 blur-3xl shadow-2xl shadow-bluish rounded-full z-[-1] opacity-50" />
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading heading="Contact Me" />
        <p className="text-lg text-gray-600 mb-5">
          Feel free to reach out via email or phone.
        </p>

        <div className="mb-8 space-y-2">
          <p className="text-gray-700 text-xl">
            📧{" "}
            <a
              href="mailto:usamamansoor79@gmail.com"
              className="text-blue-600 hover:underline"
            >
              usamamansoor79@gmail.com
            </a>
          </p>
          <p className="text-gray-700 text-xl">
            📞{" "}
            <a
              href="tel:+923345103146"
              className="text-blue-600 hover:underline"
            >
              +92 334 5103146
            </a>
          </p>
        </div>

        <p className="text-lg text-gray-600 mb-5">
          You can also find me on these platforms:
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/usama-mansoor"
            target="_blank"
            className="text-writing hover:text-bluish transition-transform transform hover:scale-110"
          >
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zm7.98 0h4.76v2.04h.07c.66-1.24 2.28-2.54 4.69-2.54 5.02 0 5.95 3.3 5.95 7.59V24h-5v-6.79c0-1.62-.03-3.7-2.26-3.7-2.27 0-2.62 1.77-2.62 3.6V24h-5V8.98z" />
            </svg>
          </a>
          <a
            href="https://github.com/UsamaMansoor026"
            target="_blank"
            className="text-writing hover:text-bluish transition-transform transform hover:scale-110"
          >
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.24.78-.54v-1.86c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.68 5.39-5.24 5.67.42.37.8 1.1.8 2.22v3.3c0 .3.2.64.79.53A10.52 10.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/usama.mansoor.5851?mibextid=ZbWKwL"
            target="_blank"
            className="text-writing hover:text-bluish transition-transform transform hover:scale-110"
          >
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.351C0 23.407.594 24 1.325 24H12.82v-9.294H9.692V11.04h3.127V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.312h3.587l-.467 3.666h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
