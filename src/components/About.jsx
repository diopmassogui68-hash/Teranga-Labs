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
      <div className="container about__layout">
        <div className={`about__intro reveal ${visible ? 'is-visible' : ''}`}>
          <span className="section-eyebrow">Pourquoi nous choisir ?</span>
          <h2 id="about-heading" className="section-title">
            Une vision. Une équipe.
            <br />
            Un engagement.
          </h2>
        </div>

        <div className="about__values" role="list">
          {VALUES.map((item, index) => {
            const Icon = VALUE_ICONS[item.icon] || Zap;
            return (
              <div
                key={item.id}
                role="listitem"
                className={`value-item reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
              >
                <div className="value-item__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.85} />
                </div>
                <h3 className="value-item__title">{item.title}</h3>
                <p className="value-item__desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
