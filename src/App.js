import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './App.css'

const App = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg",
  ];

  return (
    <Slide>

      {
        images.map((image, index) => (
          <div>
            <div key={index} className='each-slide-effect' >
              <img src={image} className='image' />

              <a href='#'>Ver más</a>
            </div>
          </div>
        )
        )
      }
    </Slide>
  );
};

export default App;