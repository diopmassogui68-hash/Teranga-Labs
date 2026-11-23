import { ArrowRight, ArrowUpRight, Code2, Layers, PenTool, Smartphone } from 'lucide-react';
import { SERVICES } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const SERVICE_ICONS = {
  code: Code2,
  smartphone: Smartphone,
  layers: Layers,
  pen: PenTool,
};

export default function Services({ onSelectService }) {
  const [sectionRef, visible] = useReveal(0.12);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`section services ${visible ? 'is-visible' : ''}`}
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className={`services__header reveal ${visible ? 'is-visible' : ''}`}>
          <div className="services__header-left">
            <span className="section-eyebrow">Nos services</span>
            <h2 id="services-heading" className="section-title">
              Des solutions sur mesure.
            </h2>
          </div>

          <div className="services__header-right">
            <p className="section-desc services__desc">
              Une expertise complète pour donner vie à vos projets digitaux.
            </p>
            <button
              type="button"
              className="services__all-link"
              onClick={() => onSelectService(SERVICES[0])}
            >
              <span>Explorer tous les services</span>
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="services__list" role="list">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon] || Code2;
            return (
              <button
                key={service.id}
                type="button"
                role="listitem"
                className={`service-row reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
                onClick={() => onSelectService(service)}
                aria-label={`Découvrir ${service.title}`}
              >
                <span className="service-row__num" aria-hidden="true">
                  0{index + 1}
                </span>

                <span className="service-row__main">
                  <span className="service-row__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="service-row__title">{service.title}</span>
                </span>

                <span className="service-row__desc">{service.description}</span>

                <span className="service-row__arrow" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.85} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
