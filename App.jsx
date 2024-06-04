import React, { useState } from 'react';
import axios from 'axios';
import CatCard from './CatCard';
import CatTable from './CatTable';
import FetchButtons from './FetchButtons';
import './App.css';

const App = () => {
  const [cat, setCat] = useState(null);
  const [view, setView] = useState('table');

  const fetchRandomCat = async () => {
    try {
      console.log('Fetching random cat data...');
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      if (response.status === 200 && response.data.length > 0) {
        console.log('Random cat data received:', response.data[0]);
        setCat(response.data[0]);
        setView('table');
      } else {
        console.warn('No cat data returned from API.');
      }
    } catch (error) {
      console.error('Error fetching random cat:', error);
    }
  };
<CatTable cat={cat} />
  const fetchCatDetails = async () => {
    if (!cat) {
      console.log('No cat data to fetch details for.');
      return;
    }

    try {
      console.log(`Fetching details for cat ID: ${cat.id}...`);
      const response = await axios.get(`https://api.thecatapi.com/v1/images/${cat.id}`, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      if (response.status === 200 && response.data) {
        console.log('Cat details received:', response.data);
        setCat(response.data);
        setView('card');
      } else {
        console.warn('No detailed data returned for the cat.');
      }
    } catch (error) {
      console.error('Error fetching cat details:', error);
    }
  };

  return (
    <div className="App">
      <h1>Cat Info</h1>
      <FetchButtons fetchRandomCat={fetchRandomCat} fetchCatDetails={fetchCatDetails} />
      {view === 'table' ? <CatTable cat={cat} /> : <CatCard cat={cat} />}
    </div>
  );
};

export default App;
