import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="ar" smooth={true} duration={500} className="header-link logo-link">AR</Link>
      <Link to="home" smooth={true} duration={500} className="header-link home-link">Home</Link>
      <Link to="contato" smooth={true} duration={500} className="header-link contato-link">Contato</Link>
      <Link to="projetos" smooth={true} duration={500} className="header-link projetos-link">Projetos</Link>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="home" className="section">
        <h1>Homepage</h1>
        <p>Conteúdo da página inicial</p>
      </div>

      <div id="projetos" className="section white-bg">
        <h1>Projetos</h1>
        <p>Lista de projetos</p>
      </div>

      <div id="contato" className="section blue-bg">
        <h1>Contato</h1>
        <p>Formulário de contato</p>
      </div>

    </div>
  );
};

export default App;
