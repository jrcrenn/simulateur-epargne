import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EpargneSimulator from './components/EpargneSimulator';
import RGPD from './components/RGPD';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">Accueil</Link>
            </li>
            <li className="nav__item">
              <Link to="/epargne-simulator" className="nav__link">Mon Simulateur d'épargne</Link>
            </li>
            <li className="nav__item">
              <Link to="/rgpd" className="nav__link">Politique de confidentialité</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/epargne-simulator" element={<EpargneSimulator />} />
            <Route path="/rgpd" element={<RGPD />} />
            <Route path="/" element={
              <div>
                <h1 className="title">Bienvenue sur Mon Simulateur d'épargne</h1>
                <p className="description">Mon Simulateur d'épargne est un outil en ligne gratuit qui vous permet de simuler votre épargne en fonction de votre situation financière actuelle et de vos objectifs financiers. Notre simulateur utilise des formules mathématiques pour calculer le montant que vous devez économiser chaque mois pour atteindre votre objectif d'épargne.</p>
                <h2 className="subtitle">Comment ça marche ?</h2>
                <p className="description">Pour utiliser Mon Simulateur d'épargne, vous devez fournir des informations sur votre revenu, vos dépenses et vos objectifs financiers. Le simulateur utilise ces informations pour calculer le montant que vous devez économiser chaque mois pour atteindre votre objectif. Vous pouvez également ajuster les paramètres pour voir comment les changements de votre situation financière peuvent affecter votre plan d'épargne.</p>
                <h2 className="subtitle">Pourquoi utiliser Mon Simulateur d'épargne ?</h2>
                <p className="description">Mon Simulateur d'épargne peut vous aider à planifier votre avenir financier en vous permettant de voir comment votre épargne peut croître au fil du temps. En utilisant notre simulateur, vous pouvez trouver le plan d'épargne qui convient le mieux à votre situation financière et à vos objectifs financiers. Nous sommes là pour vous aider à atteindre vos rêves financiers !</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
