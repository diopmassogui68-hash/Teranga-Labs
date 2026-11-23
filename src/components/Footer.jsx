import { Github, Linkedin, Youtube } from 'lucide-react';
import logoDark from '../assets/logo/teranga-labs-logo.svg';
import { NAV_LINKS } from '../data/content';

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer" aria-label="Pied de page">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#accueil" className="footer__logo" aria-label="Téranga Labs">
              <img src={logoDark} alt="Téranga Labs" width="142" height="30" />
            </a>
            <p className="footer__tagline">
              Agence digitale — sites web, applications web & mobiles conçus avec exigence.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Liens du pied de page">
            {NAV_LINKS.map((item) => (
              <a key={item.id} href={item.href} className="footer__link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials" aria-label="Réseaux sociaux">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn de Téranga Labs"
            >
              <Linkedin size={16} strokeWidth={1.9} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="GitHub de Téranga Labs"
            >
              <Github size={16} strokeWidth={1.9} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="YouTube de Téranga Labs"
            >
              <Youtube size={16} strokeWidth={1.9} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="X de Téranga Labs"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Téranga Labs. Tous droits réservés.</p>
          <p className="footer__location">Dakar · Solutions numériques sur mesure</p>
        </div>
      </div>
    </footer>
  );
}
