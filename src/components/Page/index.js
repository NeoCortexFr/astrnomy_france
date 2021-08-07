import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './page.scss';

import Accueil from 'src/components/Page/Accueil';
import Solaire from 'src/components/Page/Solaire';
import Sondes from 'src/components/Page/Sondes';
import RR from 'src/components/Page/RR';
import RG from 'src/components/Page/RG';
import Phys from 'src/components/Page/Phys';
import Book from 'src/components/Page/Book';
import Glossaire from 'src/components/Page/Glossaire';

const Page = () => (
  <section className="page">
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/systeme-solaire" component={Solaire} />
      <Route path="/sondes-spatiales" component={Sondes} />
      <Route path="/relativite-restreinte" component={RR} />
      <Route path="/relativite-generale" component={RG} />
      <Route path="/physque-astrophysique-mathematiques" component={Phys} />
      <Route path="/livres-ouvrages" component={Book} />
      <Route path="/glossaire" component={Glossaire} />
    </Switch>
  </section>
);
export default Page;
