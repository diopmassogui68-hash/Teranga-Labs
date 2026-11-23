import { ArrowRight, Code2, Layers, PenTool, Smartphone } from 'lucide-react';
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
      <div className="container services__layout">
        <div className={`services__intro reveal ${visible ? 'is-visible' : ''}`}>
          <span className="section-eyebrow">Nos services</span>
          <h2 id="services-heading" className="section-title">
            Des solutions
            <br />
            sur mesure.
          </h2>
          <p className="section-desc">
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

        <div className="services__grid" role="list">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon] || Code2;
            return (
              <article
                key={service.id}
                role="listitem"
                className={`service-card reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
              >
                <div className="service-card__top">
                  <div className="service-card__icon" aria-hidden="true">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <span className="service-card__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <button
                  type="button"
                  className="service-card__action"
                  onClick={() => onSelectService(service)}
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  <span>Détails</span>
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
