import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

//COMPONENT IMPORTS
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  let [gallery, setGallery] = useState([]);

  
  useEffect(() => {
    console.log('useEffect() -- page load')
    fetchGallery();
  }, []);

  //FETCH PHOTOS DATA AND ADD TO GALLERY
  const fetchGallery = () => {
    axios ({
      method: 'GET',
      url: '/gallery',
    }).then(response => { 
      console.log('the response.data is ', response.data);
      setGallery(response.data);
    }).catch(error => {
      console.log(error) 
      alert('Something went wrong!');
    });
  }


  //PROP TO GALLERYLIST
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goat Gallery</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        <GalleryList gallery={gallery}/>


        
        {/* <img src="images/goat_small.jpg"/> */}



      </div>
    );
}

export default App;
