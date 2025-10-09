import { BrowserRouter as Router, Routes, Route, useParams, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA1 from './components/CTA1';
import CTA2 from './components/CTA2';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Support from './components/Support';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function ExternalRedirect({ to }) {

  useEffect(() => {
     window.location.href = `${to}`;
  }, [])
  
  return (
    <></>
  )
}

function ExternalIframe({ to }) {  
  const navigate = useNavigate();
  return (
    <div className='blog-section'>
      <button className="back-button" onClick={() => navigate("/portfolio")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow-icon"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="back-label">Back</span>
      </button>
      <iframe 
        title='blog'
        src={to} 
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write; fullscreen"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  )
}

function StandardPage({ children }) {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Navbar />
      <main role='main'>
        {children}
      </main>
      <Footer />
    </>
  );
}

function ScrollLayout() {
  const { sectionId } = useParams();

  const sections = {
    home: useRef(null),
    features: useRef(null),
    process: useRef(null),
    pricing: useRef(null),
    cta1: useRef(null),
    cta2: useRef(null),
    portfolio: useRef(null),
    footer: useRef(null),
  };

  const valid = new Set(Object.keys(sections));

  useEffect(() => {
    const key = sectionId || 'hero';
    const node = sections[key]?.current;
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [sectionId]);

  if (sectionId && !valid.has(sectionId)) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <div ref={sections.home}><Hero /></div>
      <div ref={sections.cta1}><CTA1 /></div>
      <div ref={sections.features}><Features /></div>
      <div ref={sections.process}><Process /></div>
      <div ref={sections.pricing}><Pricing /></div>
      <div ref={sections.cta2}><CTA2 /></div>
      <div ref={sections.portfolio}><Portfolio /></div>
      <div ref={sections.footer}><Footer /></div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/support" element={<StandardPage><Support/></StandardPage>} />
        <Route path="/contact" element={<StandardPage><Contact/></StandardPage>} />
        <Route path="/newsletter" element={<StandardPage><Newsletter/></StandardPage>} />
        <Route path="/blog" element={<ExternalRedirect to="https://renderlogic-blog.net" />} />
        <Route path="/portfolio/paddle" element={<ExternalIframe to="https://paddle-visualizer.vercel.app" />} />
        <Route path="/portfolio/watch" element={<ExternalIframe to="https://watch-visualizer.vercel.app" />} />
        <Route path="/portfolio/patio3d" element={<ExternalIframe to="https://frame-visualizer.vercel.app" />} />
        <Route path="/" element={<ScrollLayout />} />
        <Route path="/:sectionId" element={<ScrollLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
