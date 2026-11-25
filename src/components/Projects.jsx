import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Projects({ onSelectProject }) {
  const [sectionRef, visible] = useReveal(0.1);
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
      <div className="container">
        {/* Full-Width Editorial Header */}
        <div className={`projects__header reveal ${visible ? 'is-visible' : ''}`}>
          <div>
            <span className="section-eyebrow">Nos réalisations</span>
            <h2 id="projects-heading" className="section-title">
              Des projets qui inspirent.
            </h2>
          </div>

          <div className="projects__header-right">
            <p className="section-desc projects__desc">
              Découvrez quelques-unes de nos réalisations qui font la différence.
            </p>
            <button
              type="button"
              className="btn-primary btn-magnetic"
              onClick={() => onSelectProject(project)}
            >
              <span>Voir tous les projets</span>
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Full-Width Architectural Studio Showcase Frame */}
        <div
          className={`projects__frame reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
          }}
        >
          {/* Top Switcher Bar */}
          <div className="projects__frame-top">
            <div className="projects__tabs" role="tablist" aria-label="Sélectionner un projet">
              {PROJECTS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  className={`projects__tab ${idx === activeIndex ? 'projects__tab--active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="projects__tab-num">0{idx + 1}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            <div className="projects__nav-arrows">
              <button
                type="button"
                className="carousel-arrow"
                onClick={handlePrev}
                aria-label="Projet précédent"
              >
                <ChevronLeft size={18} strokeWidth={1.9} />
              </button>
              <button
                type="button"
                className="carousel-arrow"
                onClick={handleNext}
                aria-label="Projet suivant"
              >
                <ChevronRight size={18} strokeWidth={1.9} />
              </button>
            </div>
          </div>

          {/* Centerpiece 3-Device Showcase */}
          <div className="device-stage" key={project.id}>
            {/* Left Tilted Smartphone */}
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
                        d="M5 10.5L9.2 6H36.5L32.8 9.8C31.2 11.4 29.4 11.8 27.2 11.8H24.6V33.6L20.4 30.2C18.6 28.7 17.8 26.8 17.8 24.4V11.8H5V10.5Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M27.6 15.2L30.8 18.2C32.4 19.7 33.4 21.6 33.4 24.2V34.6C30.4 33.8 28.2 31.8 27.6 28.8V15.2Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M28.2 35.8C31.2 37.8 34.4 38.4 38.2 38.4C40.4 38.4 42.2 39.2 45 41.4H36.6C32.2 41.4 29.2 39.2 28.2 35.8Z"
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

          {/* Bottom Project Details Strip */}
          <div className="projects__frame-bottom" aria-live="polite">
            <div className="projects__meta-info">
              <div className="projects__meta-title-row">
                <h3 className="projects__meta-name">{project.name}</h3>
                <span className="projects__meta-cat">{project.category}</span>
              </div>
              <p className="projects__meta-tagline">{project.tagline}</p>
            </div>

            <div className="projects__metrics-row">
              {project.metrics.map((m) => (
                <div key={m.label} className="projects__metric-chip">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="projects__explore-btn"
              onClick={() => onSelectProject(project)}
            >
              <span>En savoir plus</span>
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
