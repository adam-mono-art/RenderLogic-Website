import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRouter({ sections }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.pathname.replace('/', '') || 'hero';
    const target = sections[hash];
    if (target?.current) {
      target.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, sections]);

  return null;
}
