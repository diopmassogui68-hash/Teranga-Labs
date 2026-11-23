import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { PROJECTS, SERVICES } from '../data/content';

export default function ProjectModal({
  project,
  service,
  onSelectProject,
  onSelectService,
  onClose,
  onStartProject,
}) {
  const isOpen = Boolean(project || service);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel modal-panel--wide">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fermer les détails"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {project && (
          <>
            <div className="modal-tabs" role="tablist" aria-label="Tous les projets">
              {PROJECTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === project.id}
                  className={`modal-tab ${item.id === project.id ? 'modal-tab--active' : ''}`}
                  onClick={() => onSelectProject(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <span className="section-eyebrow">{project.category}</span>
            <h3 id="detail-modal-title" className="modal-title">
              {project.name}
            </h3>
            <p className="modal-desc">{project.summary}</p>

            <div className="modal-metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="modal-metric">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            <ul className="modal-list">
              {project.highlights.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="modal-note">{project.statusNote}</p>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  onClose();
                  onStartProject(project.category);
                }}
              >
                <span>Discuter d’un projet similaire</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </>
        )}

        {service && (
          <>
            <div className="modal-tabs" role="tablist" aria-label="Tous les services">
              {SERVICES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === service.id}
                  className={`modal-tab ${item.id === service.id ? 'modal-tab--active' : ''}`}
                  onClick={() => onSelectService(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <span className="section-eyebrow">Expertise Téranga Labs</span>
            <h3 id="detail-modal-title" className="modal-title">
              {service.title}
            </h3>
            <p className="modal-desc">{service.details}</p>

            <ul className="modal-list">
              {service.deliverables.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  onClose();
                  onStartProject(service.title);
                }}
              >
                <span>Démarrer avec ce service</span>
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
