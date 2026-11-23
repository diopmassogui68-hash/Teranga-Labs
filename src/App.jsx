import { useEffect } from 'react';
import IntroSplash from './components/IntroSplash';
import Home from './pages/Home';

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash && window.location.hash !== '#accueil') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <IntroSplash />
      <Home />
    </>
  );
}
