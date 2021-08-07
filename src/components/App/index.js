import React from 'react';
import './app.scss';

// import reactLogo from './react-logo.svg'; <img src={reactLogo} alt="react logo" />
import './styles.css';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

const App = () => (
  <div className="app">
    <Header />
    <section className="app_flex">
      <Nav />
      <Page />
    </section>
    <Footer />
  </div>
);

export default App;
