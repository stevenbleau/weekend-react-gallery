import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    console.log('useEffect() -- page load')
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios ({
      method: 'GET',
      url: '/gallery',
    }).then(response => { 
      setGallery(response.data);
    }).catch(error => {
      console.log(error)
      alert('Something went wrong!');
    });
  }

  console.log('the data is', gallery);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
