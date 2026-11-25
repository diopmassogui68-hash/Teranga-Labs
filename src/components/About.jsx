import { Gem, Handshake, Zap } from 'lucide-react';
import { VALUES } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const VALUE_ICONS = {
  zap: Zap,
  gem: Gem,
  handshake: Handshake,
};

export default function About() {
  const [sectionRef, visible] = useReveal(0.14);

  return (
    <section
      id="a-propos"
      ref={sectionRef}
      className="section about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className={`about__header reveal ${visible ? 'is-visible' : ''}`}>
          <div>
            <span className="section-eyebrow">Pourquoi nous choisir ?</span>
            <h2 id="about-heading" className="section-title">
              Une vision. Une équipe.
              <br />
              Un engagement.
            </h2>
          </div>

          <p className="section-desc about__lead">
            Chaque produit que nous construisons repose sur la clarté, la maîtrise technique et un
            accompagnement humain de bout en bout.
          </p>
        </div>

        <div className="about__values" role="list">
          {VALUES.map((item, index) => {
            const Icon = VALUE_ICONS[item.icon] || Zap;
            return (
              <article
                key={item.id}
                role="listitem"
                className={`value-card reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
              >
                <div className="value-card__top">
                  <span className="value-card__num" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className="value-card__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="value-card__title">{item.title}</h3>
                <p className="value-card__desc">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
