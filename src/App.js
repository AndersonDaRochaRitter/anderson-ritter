import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import './Header.css';
import seta1 from './Seta1.svg';

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
        <h1 style={{ position: 'absolute', top: '405px', left: '605px', height: '18px', width: '161px', color: '#000', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>Engenheiro de Software</h1>
        <h1 style={{ position: 'absolute', top: '405px', left: '818px', height: '18px', width: '135px', color: '#000', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', lineHeight: '18px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>Desenvolvedor</h1>
        <div className="ponto"></div>
        <div className="traco-esquerdo"></div>
        <div className="traco-direito"></div>
        <div className="eclipseTop"></div>
        <div className='eclipse'></div>
        <div className='eclipseBot'></div>
        <div className='eclipseBot1'></div>
        <div className='eclipseBot2'></div>
        <div ><img src={seta1} width={30} height={30} /></div>
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
