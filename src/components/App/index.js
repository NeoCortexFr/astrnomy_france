import React from 'react';

// import reactLogo from './react-logo.svg'; <img src={reactLogo} alt="react logo" />
import './styles.css';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

const App = () => (
  <div className="app">
    <Header />
    <section className="app_flex">
      <Nav />
    </section>
    <Footer />
  </div>
);

export default App;
