import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ProjectModal from '../components/ProjectModal';
import UniverseModal from '../components/UniverseModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [universeOpen, setUniverseOpen] = useState(false);

  const handleOpenContact = (serviceName = '') => {
    setPreselectedService(serviceName);
    setContactOpen(true);
  };

  return (
    <>
      <Navbar onStartProject={handleOpenContact} />
      <main>
        <Hero onOpenUniverse={() => setUniverseOpen(true)} />
        <Services onSelectService={(srv) => setSelectedService(srv)} />
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
        <About />
        <Contact onOpenContact={handleOpenContact} />
      </main>
      <Footer onStartProject={handleOpenContact} />

      <ContactModal
        isOpen={contactOpen}
        initialService={preselectedService}
        onClose={() => setContactOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        service={selectedService}
        onSelectProject={(proj) => {
          setSelectedService(null);
          setSelectedProject(proj);
        }}
        onSelectService={(srv) => {
          setSelectedProject(null);
          setSelectedService(srv);
        }}
        onClose={() => {
          setSelectedProject(null);
          setSelectedService(null);
        }}
        onStartProject={handleOpenContact}
      />

      <UniverseModal
        isOpen={universeOpen}
        onClose={() => setUniverseOpen(false)}
        onStartProject={handleOpenContact}
      />
    </>
  );
}
