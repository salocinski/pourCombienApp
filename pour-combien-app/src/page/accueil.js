import React from 'react';
import '../App.css';
import logo from '../img/question-mark.jpg';
import { useNavigate  } from 'react-router-dom';

function Accueil() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Use navigate to go to the "/other" page
        navigate('/selectionrange');
      };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="content">
            <h1>Pour combien...?</h1>
            <h2>Es tu pret a jouer ?</h2>
            <button onClick={handleClick}>Jouer</button>
          </div>
        </header>
      </div>
    );
}

export default Accueil;