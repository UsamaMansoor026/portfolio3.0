import { ArrowUpRight, Mail, Phone } from "lucide-react";

const profiles = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/usama-mansoor" },
  { name: "GitHub", href: "https://github.com/UsamaMansoor026" },
  { name: "Facebook", href: "https://www.facebook.com/usama.mansoor.5851?mibextid=ZbWKwL" },
];

const Contact = () => {
  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-shell contact-panel">
        <p className="portfolio-kicker">Contact</p>
        <h2 className="portfolio-heading">Let&apos;s <em>talk.</em></h2>
        <p className="contact-intro">I&apos;m open to remote Android roles and mobile app collaborations.</p>
        <div className="portfolio-actions">
          <a className="portfolio-button" href="mailto:usamadeveloper026@gmail.com">
            <span className="portfolio-button-face">
              <Mail size={17} aria-hidden="true" /> Email me
            </span>
          </a>
          <a className="portfolio-text-link" href="tel:+923345103146">
            <Phone size={16} aria-hidden="true" /> +92 334 5103146
          </a>
        </div>
        <a className="contact-address" href="mailto:usamadeveloper026@gmail.com">
          usamadeveloper026@gmail.com
        </a>
        <ul className="contact-profiles">
          {profiles.map(({ name, href }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noreferrer">
                {name} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
