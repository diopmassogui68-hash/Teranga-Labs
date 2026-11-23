import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logoDark from '../assets/logo/teranga-labs-logo.svg';
import { NAV_LINKS } from '../data/content';
import '../styles/navbar.css';

export default function Navbar({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#accueil" className="navbar__logo" aria-label="Téranga Labs — Retour à l'accueil">
          <img src={logoDark} alt="Téranga Labs" width="170" height="36" />
        </a>

        <nav className="navbar__nav" aria-label="Navigation principale">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navbar__link ${activeId === item.id ? 'navbar__link--active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta-wrap">
          <button type="button" className="btn-primary navbar__cta" onClick={() => onStartProject()}>
            <span>Démarrer un projet</span>
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.9} /> : <Menu size={20} strokeWidth={1.9} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}
      >
        <div className="navbar__mobile-inner">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="navbar__mobile-link"
              onClick={handleLinkClick}
            >
              <span>{item.label}</span>
              <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
          ))}
          <button
            type="button"
            className="btn-primary navbar__mobile-cta"
            onClick={() => {
              setMobileOpen(false);
              onStartProject();
            }}
          >
            <span>Démarrer un projet</span>
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
