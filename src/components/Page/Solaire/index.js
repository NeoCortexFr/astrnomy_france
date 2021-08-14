import React from 'react';
import './solaire.scss';
import solarSystem from './840px-Solar-System-fr.png';

const Solaire = () => (
  <article className="solaire">
    <h2 className="solaire_title">Le Système Solaire</h2>
    <p className="solaire_content">
      Explorons le système solaire.
    </p>
    <p className="solaire_content">
      Commençons par le début. Le système solaire se compose de:
    </p>
    <ul className="solaire_content_list">
      <li>Le Soleil</li>
      <li>Mercure</li>
      <li>Venus</li>
      <li>Terre (ici...)</li>
      <li>Mars</li>
      <li>Jupiter</li>
      <li>Saturne</li>
      <li>Uranus</li>
      <li>Neptune</li>
    </ul>
    <p className="solaire_content">
      Voici la représentation planétaire, mais il n'y a pas que ça...
    </p>
    <p className="solaire_content">
      Explorons encore un peu...
    </p>
    <p className="solaire_content">
      Entre Mars et Jupiter se trouve la ceinture d'astéroïdes.
      Une planète naine assez connue s'y trouve: Cérès.
    </p>
    <p className="solaire_content">
      Au delà de Neptune se trouve la ceinture de Kuiper, autre grande ceinture d'astéroïdes.
      Encore après se trouve le nuage d'Oort, de là où les lointaines
      comètes prennent leurs origines.
    </p>
    <p className="solaire_content">
      Mais ce n'est pas tout...
    </p>
    <p className="solaire_content">
      Commençons par la Terre, elle possède un satellite, la Lune.
      Facile pour nous, elle est largement visible quasi tous les jours.
    </p>
    <p className="solaire_content">
      Mars possède aussi 2 satellites naturels: Déimos et Phobos.
    </p>
    <p className="solaire_content">
      Jupiter possède elle 79 satellites naturels connus.
      Ganymède, Io, Europe et Callisto sont les plus connus.
    </p>
    <p className="solaire_content">
      Saturne possède le plus grand nombre de satellites naturels connus: 82.
      Elle est surtout connue pour ses magnifiques anneaux.
    </p>
    <p className="solaire_content">
      Uranus possède elle aussi 13 anneaux, beaucoup plus étroits que
      ceux de Saturne.<br />
      En plus, elle s'est entourée de 27 lunes.
    </p>
    <p className="solaire_content">
      Neptune elle aussi s'entoure de 5 anneaux et 14 satellites.
    </p>
    <p className="solaire_content">
      Représentation du système solaire.
      <span className="italic"> Image de wikipédia</span>
    </p>
    <img
      src={solarSystem}
      alt="representation du systeme solaire"
      title="representation prise sur Wikipédia"
    />
    <p className="solaire_content">
      Explorons chacune de ces planètes plus en détails:
    </p>
    <p className="solaire_content">
      Mercure:
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 0.4ua</li>
      <li>Rayon: 2439.7km (0.383 Terre)</li>
      <li>Masse: 0.055 Terre</li>
      <li>Gravité de surface: 0.378g</li>
      <li>Vitesse de libération: 4.25km/s</li>
      <li>Période de rotation: 59 jours</li>
      <li>Période de révolution: 88 jours</li>
    </ul>
    <p className="solaire_content">
      Venus
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 0.7ua</li>
      <li>Rayon: 6051km (0.952 Terre)</li>
      <li>Masse: 0.815 Terre</li>
      <li>Gravité de surface: 0.905g</li>
      <li>Vitesse de libération: 10.46km/s</li>
      <li>Période de rotation: -243 jours</li>
      <li>(elle tourne dans le sens rétrograde des autres planètes)</li>
      <li>Période de révolution: 224 jours</li>
      <li>A noter qu'elle tourne plus vite autour du Soleil qu'elle ne
        tourne sur elle même.
      </li>
    </ul>
    <p className="solaire_content">
      Terre (on est dessus !)
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 1ua (par définition)</li>
      <li>Rayon: 6378km</li>
      <li>Masse: 5,973 6×10<span className="exp">24</span> kg</li>
      <li>Gravité de surface: 1g</li>
      <li>Vitesse de libération: 11.186km/s</li>
      <li>Période de rotation: 23h 56min 4.084s</li>
      <li>Période de révolution: 365.256363 jours</li>
    </ul>
    <p className="solaire_content">
      Mars
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 1.5ua</li>
      <li>Rayon: 3396km (0.533 Terre)</li>
      <li>Masse: 0.107 Terre</li>
      <li>Gravité de surface: 0.379g</li>
      <li>Vitesse de libération: 5km/s</li>
      <li>Période de rotation: 1.025 jour</li>
      <li>Période de révolution: 688 jours (1.88 an)</li>
    </ul>
    <p className="solaire_content">
      Jupiter
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 5.2ua</li>
      <li>Rayon: 71492km (11.209 Terre)</li>
      <li>Masse: 317.8 Terre</li>
      <li>Gravité de surface: 2.358g</li>
      <li>Vitesse de libération: 59.5km/s</li>
      <li>Période de rotation: 9h 55min</li>
      <li>Période de révolution: 11.86 ans</li>
    </ul>
    <p className="solaire_content">
      Saturne
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 9.5ua</li>
      <li>Rayon: 60268km (9.45 Terre)</li>
      <li>Masse: 95.152 Terre</li>
      <li>Gravité de surface: 1.04g</li>
      <li>Vitesse de libération: 35.5km/s</li>
      <li>Période de rotation: 10h 33min</li>
      <li>Période de révolution: 29.4 ans</li>
    </ul>
    <p className="solaire_content">
      Uranus
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 19.2ua</li>
      <li>Rayon: 25559km (4.007 Terre)</li>
      <li>Masse: 14 Terre</li>
      <li>Gravité de surface: 0.904g</li>
      <li>Vitesse de libération: 21.3km/s</li>
      <li>Période de rotation: -17h 24min</li>
      <li>(elle tourne dans le sens rétrograde des autres planètes)</li>
      <li>Période de révolution: 84 ans</li>
    </ul>
    <p className="solaire_content">
      Neptune
    </p>
    <ul className="solaire_content_list">
      <li>Distance du Soleil: 30ua</li>
      <li>Rayon: 24764km</li>
      <li>Masse: 17.147 Terre</li>
      <li>Gravité de surface: 1.14g</li>
      <li>Vitesse de libération: 23.5km/s</li>
      <li>Période de rotation: 16h 06min</li>
      <li>Période de révolution: 164.86 ans</li>
    </ul>
    <p className="solaire_content">
      N'oublions pas notre étoile, le Soleil !
    </p>
    <ul className="solaire_content_list">
      <li>Il se classe dans la catégorie "Naine Jaune"</li>
      <li>Rayon: 696342 km</li>
      <li>Masse: 1.989 x 10<span className="exp">30</span>kg</li>
      <li>Gravité de surface: 273.95 m/s²</li>
      <li>Vitesse de libération: 617.54km/s</li>
      <li>Période de rotation moyenne: 27.28 jours</li>
      <li>Température de surface: entre 3500°C et 5900°C</li>
    </ul>
  </article>
);
export default Solaire;

/*
  <ul className="solaire_content_list">
      <li>Distance du Soleil:</li>
      <li>Rayon:</li>
      <li>Masse:</li>
      <li>Gravité de surface:</li>
      <li>Vitesse de libération: </li>
      <li>Période de rotation:</li>
      <li>Période de révolution:</li>
    </ul>
  */
