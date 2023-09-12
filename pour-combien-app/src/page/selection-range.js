import React, { useState } from 'react';
import logo from '../img/question-mark.jpg';


function Selection() {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (e) => {
    setSelectedValue({selectedValue: e.target.value})
    console.log(e.target.value)
  }
  const handleClick = () => {
    // Use navigate to go to the "/other" page
    
  };
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="content">
            <h1>On joue en combien ?</h1>
            <div className='selection-group'>
              <select value={selectedValue} className='select-fin' onChange={handleChange}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <button onClick={handleClick} className="btn-lancer">Jouer</button>
          </div>
        </header>
      </div>
    );
}

export default Selection;