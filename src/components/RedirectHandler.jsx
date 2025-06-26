// src/components/RedirectHandler.jsx
import { useNavigate } from 'react-router-dom';

export const RedirectHandler = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const path = query.get('path');
  if (path) {
    navigate(path.replace('/Lisa-Borger', ''));
  }
  return null;
};