import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav_list">
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/systeme-solaire">Système solaire</Link></li>
      <li><Link to="/sondes-spatiales">Sondes spatiales</Link></li>
      <li><Link to="/relativite-restreinte">Relativité restreinte</Link></li>
      <li><Link to="/relativite-generale">Relativité générale</Link></li>
      <li><Link to="/physique-astrophysique-mathematiques">Physique / Astrophysqiue</Link></li>
      <li><Link to="/livres-ouvrages">Livres / Ouvrages</Link></li>
      <li><Link to="/glossaire">Glossaire</Link></li>
    </ul>
  </nav>
);
export default Nav;
