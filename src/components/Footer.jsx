import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react';
import logoWhite from '../assets/logo/teranga-labs-logo-white.svg';
import heroSculpture from '../assets/images/hero-tl-sculpture.jpg';
import { NAV_LINKS, SERVICES } from '../data/content';

const MARQUEE_ITEMS = [
  'DÉVELOPPEMENT WEB',
  'APPLICATIONS MOBILES',
  'APPLICATIONS WEB',
  'UI/UX DESIGN',
  'SOLUTIONS SUR MESURE',
  'TÉRANGA LABS',
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'YouTube', href: 'https://www.youtube.com' },
  { label: 'X', href: 'https://x.com' },
];

const CONTACT_EMAIL = 'contact@terangalabs.com';

function getDakarTime() {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Africa/Dakar',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date());
  } catch {
    return '00:00';
  }
}

export default function Footer({ onStartProject }) {
  const [dakarTime, setDakarTime] = useState(getDakarTime);
  const [copied, setCopied] = useState(false);
  const monumentRef = useRef(null);
  const medallionRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDakarTime(getDakarTime());
    }, 30000);
    return () => window.clearInterval(interval);
  }, []);

  const handleMonumentMove = (e) => {
    const el = monumentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x.toFixed(1)}%`);
    el.style.setProperty('--my', `${y.toFixed(1)}%`);
  };

  const handleMedallionMove = (e) => {
    const el = medallionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rx = (((e.clientY - rect.top) / rect.height - 0.5) * -14).toFixed(2);
    const ry = (((e.clientX - rect.left) / rect.width - 0.5) * 16).toFixed(2);
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleMedallionLeave = () => {
    if (medallionRef.current) {
      medallionRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" aria-label="Pied de page">
      <div className="footer__glow" aria-hidden="true" />

      {/* Kinetic Monochrome Top Marquee */}
      <div className="footer__marquee" aria-hidden="true">
        <div className="footer__marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="footer__marquee-group">
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${dup}-${item}`} className="footer__marquee-item">
                  <span>{item}</span>
                  <span className="footer__marquee-dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__content">
        {/* Single Balanced Architectural Band */}
        <div className="footer__band">
          {/* Brand + Email + Dakar Clock */}
          <div className="footer__brand">
            <a href="#accueil" className="footer__logo" aria-label="Téranga Labs">
              <img src={logoWhite} alt="Téranga Labs" width="150" height="33" />
            </a>
            <p className="footer__tagline">
              Sites web, applications web & mobiles et design UI/UX conçus avec exigence.
            </p>
            <div className="footer__email-bar">
              <a href={`mailto:${CONTACT_EMAIL}`} className="footer__big-email">
                <span>{CONTACT_EMAIL}</span>
                <ArrowUpRight size={15} strokeWidth={1.9} aria-hidden="true" />
              </a>
              <button
                type="button"
                className={`footer__copy-btn ${copied ? 'footer__copy-btn--done' : ''}`}
                onClick={handleCopyEmail}
                aria-label="Copier l'adresse email"
              >
                {copied ? <Check size={12} strokeWidth={2.2} /> : <Copy size={12} strokeWidth={1.9} />}
                <span>{copied ? 'Copié' : 'Copier'}</span>
              </button>
            </div>
            <span className="footer__clock" aria-label="Heure locale à Dakar">
              DAKAR · {dakarTime} GMT
            </span>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <span className="footer__col-title">Navigation</span>
            <nav className="footer__list" aria-label="Liens du pied de page">
              {NAV_LINKS.map((item, idx) => (
                <a key={item.id} href={item.href} className="footer__link">
                  <span className="footer__link-num">0{idx + 1}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Expertises */}
          <div className="footer__col">
            <span className="footer__col-title">Expertises</span>
            <div className="footer__list">
              {SERVICES.map((srv, idx) => (
                <button
                  key={srv.id}
                  type="button"
                  className="footer__link footer__link--btn"
                  onClick={() => onStartProject?.(srv.title)}
                >
                  <span className="footer__link-num">0{idx + 1}</span>
                  <span>{srv.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive 3D TL Medallion + Back to Top */}
          <div
            className="footer__medallion-zone"
            onMouseMove={handleMedallionMove}
            onMouseLeave={handleMedallionLeave}
          >
            <div ref={medallionRef} className="footer__medallion" aria-hidden="true">
              <div className="footer__medallion-ring footer__medallion-ring--outer">
                <span className="footer__medallion-node" />
              </div>
              <img
                src={heroSculpture}
                alt=""
                className="footer__medallion-img"
                width="170"
                height="170"
                loading="lazy"
              />
            </div>

            <button
              type="button"
              className="footer__back-top"
              onClick={scrollToTop}
              aria-label="Retour en haut de la page"
            >
              <ArrowUp size={15} strokeWidth={2} />
              <span>Haut</span>
            </button>
          </div>
        </div>

        {/* Balanced Interactive Spotlight Wordmark */}
        <div
          ref={monumentRef}
          className="footer__monument"
          onMouseMove={handleMonumentMove}
          aria-hidden="true"
        >
          <span className="footer__monument-outline">TÉRANGA LABS</span>
          <span className="footer__monument-lit">TÉRANGA LABS</span>
          <span className="footer__monument-glint">TÉRANGA LABS</span>
        </div>

        {/* Bottom Legal & Social Pill Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Téranga Labs. Tous droits réservés.</p>

          <div className="footer__socials" aria-label="Réseaux sociaux">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer__social-pill"
              >
                <span>{social.label}</span>
                <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
