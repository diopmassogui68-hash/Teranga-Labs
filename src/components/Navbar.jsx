import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logoDark from '../assets/logo/teranga-labs-logo.svg';
import { NAV_LINKS } from '../data/content';
import '../styles/navbar.css';

export default function Navbar({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('accueil');
  const [hoveredId, setHoveredId] = useState(null);

  const navRef = useRef(null);
  const linkRefs = useRef({});
  const pillRef = useRef(null);
  const progressRef = useRef(null);
  const ctaRef = useRef(null);

  const currentIndicatorId = hoveredId || activeId;

  const updatePillPosition = useCallback((targetId) => {
    const pill = pillRef.current;
    const nav = navRef.current;
    const el = linkRefs.current[targetId];
    if (!pill || !nav || !el) return;

    const left = el.offsetLeft;
    const width = el.offsetWidth;
    pill.style.opacity = '1';
    pill.style.width = `${width}px`;
    pill.style.transform = `translate3d(${left}px, 0, 0)`;
  }, []);

  useEffect(() => {
    updatePillPosition(currentIndicatorId);
  }, [currentIndicatorId, scrolled, updatePillPosition]);

  useEffect(() => {
    const handleResize = () => updatePillPosition(hoveredId || activeId);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [activeId, hoveredId, updatePillPosition]);

  useEffect(() => {
    let ticking = false;

    const updateOnScroll = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 24);

      if (progressRef.current) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = y + 140;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateOnScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateOnScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Zero-rerender magnetic pull on CTA button
  const handleCtaMove = (e) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.16;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
    btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
  };

  const handleCtaLeave = () => {
    if (ctaRef.current) {
      ctaRef.current.style.transform = 'translate3d(0, 0, 0)';
    }
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--island' : ''}`}>
      <div className="navbar__shell">
        <div className="navbar__inner">
          <a href="#accueil" className="navbar__logo" aria-label="Téranga Labs — Retour à l'accueil">
            <img src={logoDark} alt="Téranga Labs" width="170" height="36" />
          </a>

          <nav
            ref={navRef}
            className="navbar__nav"
            aria-label="Navigation principale"
            onMouseLeave={() => setHoveredId(null)}
          >
            <span ref={pillRef} className="navbar__pill" aria-hidden="true" />
            {NAV_LINKS.map((item) => {
              const isHighlighted = currentIndicatorId === item.id;
              return (
                <a
                  key={item.id}
                  ref={(node) => {
                    linkRefs.current[item.id] = node;
                  }}
                  href={item.href}
                  className={`navbar__link ${isHighlighted ? 'navbar__link--active' : ''}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onFocus={() => setHoveredId(item.id)}
                  onBlur={() => setHoveredId(null)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="navbar__cta-wrap">
            <button
              ref={ctaRef}
              type="button"
              className="btn-primary navbar__cta btn-magnetic"
              onClick={() => onStartProject()}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
            >
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

        <div className="navbar__progress-track" aria-hidden="true">
          <span ref={progressRef} className="navbar__progress" />
        </div>
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
