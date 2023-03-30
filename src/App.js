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
        <h1 className="tituloPAG1">Anderson</h1>
        <h1 className="titulo2PAG1">Ritter</h1>
        <h1 style={{ position: 'absolute', top: '441px', left: '585px', width: '181px', height: '18px', width: '181px', color: '#000', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>Engenheiro de Software</h1>
        <h1 style={{ position: 'absolute', top: '441px', left: '772px', width: '181px', height: '18px', width: '181px', color: '#000', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>Desenvolvedor</h1>
        <div style={{ position: 'absolute', left: '766.45px', top: '454px' }}>
          <div style={{ width: '5.1px', height: '4.89px', borderRadius: '50%', background: '#0D0C0C' }}></div>
        </div>

      </div>

      <div id="projetos" className="section-white-bg">
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
