import React from 'react';

import './footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="footer">
      <h3 className="footer_title">By NeoCortexFr &copy; {year}.</h3>
      <div className="footer_center">Liens Utiles</div>
      <ul className="footer_list">
        <li>Lien 1</li>
        <li>Lien 2</li>
      </ul>
    </footer>
  );
};
export default Footer;
