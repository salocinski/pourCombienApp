import React from 'react';
import logo from '../img/question-mark.jpg';


function Selection() {
  const handleChange = (e) => {
    this.setState({selectedValue: e.target.value})
  }
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="content">
            <h1>On joue en combien ?</h1>
            <div className='selection-group'>
              <div className='debut'>
                <p>On pars de combien ?</p>
                <select className='select-debut' onChange={(e) => handleChange(e)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
             <div className='fin'>
              <p>On va jusqu'ou ?</p>
              <select className='select-fin' onChange={(e) => handleChange(e)}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
             </div>
            </div>
            <button className="btn-lancer">Jouer</button>
          </div>
        </header>
      </div>
    );
}

export default Selection;