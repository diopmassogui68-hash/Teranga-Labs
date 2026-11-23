import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Projects({ onSelectProject }) {
  const [sectionRef, visible] = useReveal(0.12);
  const [activeIndex, setActiveIndex] = useState(0);

  const project = PROJECTS[activeIndex];
  const { mockup } = project;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projets"
      ref={sectionRef}
      className="section projects"
      aria-labelledby="projects-heading"
    >
      <div className="container projects__layout">
        <div className={`projects__intro reveal ${visible ? 'is-visible' : ''}`}>
          <span className="section-eyebrow">Nos réalisations</span>
          <h2 id="projects-heading" className="section-title">
            Des projets
            <br />
            qui inspirent.
          </h2>
          <p className="section-desc">
            Découvrez quelques-unes de nos réalisations qui font la différence.
          </p>
          <button
            type="button"
            className="btn-primary projects__cta"
            onClick={() => onSelectProject(project)}
          >
            <span>Voir tous les projets</span>
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <div
          className={`projects__showcase reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
          }}
        >
          <div className="projects__carousel">
            <button
              type="button"
              className="carousel-arrow carousel-arrow--prev"
              onClick={handlePrev}
              aria-label="Projet précédent"
            >
              <ChevronLeft size={18} strokeWidth={1.9} />
            </button>

            <div className="device-stage" key={project.id}>
              {/* Left Tilted Smartphone Card */}
              <div className="device-phone-backdrop" aria-hidden="true">
                <div className="device-phone">
                  <div className="device-phone__notch" />
                  <div className="device-phone__screen">
                    <div className="device-phone__top">
                      <span className="device-mono-badge">TL</span>
                      <span className="device-phone__label">{mockup.mobileHeader}</span>
                    </div>
                    <div className="device-phone__card">
                      <span className="device-phone__card-title">{mockup.mobileCardTitle}</span>
                      <span className="device-phone__card-sub">{mockup.mobileCardSub}</span>
                    </div>
                    <div className="device-phone__stat">
                      <strong>{mockup.mobileMetric}</strong>
                      <span>{mockup.mobileMetricLabel}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Sleek Laptop */}
              <div className="device-laptop">
                <div className="device-laptop__lid">
                  <div className="device-laptop__camera" aria-hidden="true" />
                  <div className="device-laptop__screen">
                    <div className="device-laptop__grid-bg" aria-hidden="true" />
                    <div className="device-laptop__content">
                      <svg
                        className="device-laptop__monogram"
                        viewBox="0 0 46 42"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 5H30L26.8 10.8H20.4V32.6L14.2 28.3V10.8H4V5Z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M23.5 15.5L29.6 19.6V32.6H41.8L38.6 38.4H23.5V15.5Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                      <span className="device-laptop__title">{mockup.brandTitle}</span>
                      <span className="device-laptop__subtitle">{mockup.brandSubtitle}</span>
                      <span className="device-laptop__pill">Téranga Labs Studio</span>
                    </div>
                  </div>
                </div>
                <div className="device-laptop__base" aria-hidden="true">
                  <div className="device-laptop__hinge" />
                </div>
              </div>

              {/* Right Tilted Tablet Dashboard */}
              <div className="device-tablet-backdrop" aria-hidden="true">
                <div className="device-tablet">
                  <div className="device-tablet__sidebar">
                    <span className="device-tablet__dot device-tablet__dot--active" />
                    <span className="device-tablet__dot" />
                    <span className="device-tablet__dot" />
                    <span className="device-tablet__dot" />
                  </div>
                  <div className="device-tablet__main">
                    <div className="device-tablet__head">
                      <span className="device-tablet__title">{mockup.tabletTitle}</span>
                      <span className="device-tablet__kpi">{mockup.tabletKpi}</span>
                    </div>
                    <span className="device-tablet__sub">{mockup.tabletKpiLabel}</span>
                    <svg className="device-tablet__chart" viewBox="0 0 236 80" fill="none">
                      <defs>
                        <linearGradient id={`monoGrad-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#000000" stopOpacity="0.88" />
                          <stop offset="100%" stopColor="#000000" stopOpacity="0.06" />
                        </linearGradient>
                      </defs>
                      <path d={mockup.chartPath} fill={`url(#monoGrad-${project.id})`} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="carousel-arrow carousel-arrow--next"
              onClick={handleNext}
              aria-label="Projet suivant"
            >
              <ChevronRight size={18} strokeWidth={1.9} />
            </button>
          </div>

          {/* Caption & Project Switcher */}
          <div className="projects__meta" aria-live="polite">
            <div className="projects__meta-info">
              <div className="projects__meta-title-row">
                <h3 className="projects__meta-name">{project.name}</h3>
                <span className="projects__meta-cat">{project.category}</span>
              </div>
              <p className="projects__meta-tagline">{project.tagline}</p>
            </div>

            <div className="projects__meta-actions">
              <div className="projects__dots" role="tablist" aria-label="Sélectionner un projet">
                {PROJECTS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIndex}
                    className={`projects__dot ${idx === activeIndex ? 'projects__dot--active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <span className="projects__dot-num">0{idx + 1}</span>
                    <span className="projects__dot-label">{item.name}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="projects__more-btn"
                onClick={() => onSelectProject(project)}
              >
                <span>En savoir plus</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
