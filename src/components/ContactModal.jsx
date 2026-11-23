import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, X } from 'lucide-react';
import { SERVICES } from '../data/content';

export default function ContactModal({ isOpen, initialService, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || SERVICES[0].title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: SERVICES[0].title,
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="modal-panel">
        <button
          type="button"
          className="modal-close"
          onClick={handleResetAndClose}
          aria-label="Fermer la fenêtre de contact"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success__icon" aria-hidden="true">
              <CheckCircle2 size={32} strokeWidth={1.7} />
            </div>
            <h3 id="contact-modal-title" className="modal-title">
              Demande enregistrée.
            </h3>
            <p className="modal-desc">
              Merci {formData.name || 'pour votre message'}. L’équipe Téranga Labs vous répondra
              rapidement pour échanger sur votre projet ({formData.service}).
            </p>
            <button type="button" className="btn-primary" onClick={handleResetAndClose}>
              <span>Retour au site</span>
            </button>
          </div>
        ) : (
          <>
            <span className="section-eyebrow">Démarrer un projet</span>
            <h3 id="contact-modal-title" className="modal-title">
              Parlons de votre idée.
            </h3>
            <p className="modal-desc">
              Décrivez brièvement votre besoin. Nous revenons vers vous sous 24 heures ouvrées.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-field-row">
                <label className="modal-field">
                  <span>Nom complet</span>
                  <input
                    type="text"
                    required
                    placeholder="Ex. Awa Ndiaye"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>

                <label className="modal-field">
                  <span>Email professionnel</span>
                  <input
                    type="email"
                    required
                    placeholder="vous@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>
              </div>

              <label className="modal-field">
                <span>Type de projet</span>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Autre solution sur mesure">Autre solution sur mesure</option>
                </select>
              </label>

              <label className="modal-field">
                <span>Votre projet en quelques lignes</span>
                <textarea
                  rows={4}
                  required
                  placeholder="Objectifs, délais souhaités, fonctionnalités clés..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>

              <div className="modal-form__footer">
                <button type="submit" className="btn-primary modal-submit">
                  <span>Envoyer ma demande</span>
                  <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </button>

                <div className="modal-direct-links">
                  <a
                    href="mailto:contact@terangalabs.com?subject=Nouveau%20projet%20T%C3%A9ranga%20Labs"
                    className="modal-direct-link"
                  >
                    <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
                    <span>Email direct</span>
                  </a>
                  <a
                    href="https://wa.me/?text=Bonjour%20T%C3%A9ranga%20Labs%2C%20je%20souhaite%20discuter%20d'un%20projet%20digital."
                    target="_blank"
                    rel="noreferrer"
                    className="modal-direct-link"
                  >
                    <MessageCircle size={14} strokeWidth={1.8} aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
