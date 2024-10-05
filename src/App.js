import React, { useState } from 'react';
import './App.css'
import emojiList from './emojiList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on the search term
  const filteredData = emojiList.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='header'>
        <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="cat-angry"/>
        <h1>Naresh Emoji Search</h1>
        <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f63a.png" alt="cat-happy"/>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <hr/>
      <ul>
        {filteredData.map(item => {
          // Check if item.symbol exists and is not undefined
          const codePointHex = item.symbol ? item.symbol.codePointAt(0).toString(16) : null;
          const src = codePointHex ? `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png` : null;
          return (
            <div className='card'>
              <li key={item.id}>
                <img src={src} alt="emoji" className='emoji'/>
                <strong className='title-heading'>{item.title}</strong>
              </li>
              <span className="copy-placeholder">Click to copy emoji</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
