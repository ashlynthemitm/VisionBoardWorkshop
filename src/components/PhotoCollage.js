import React from 'react';
import './PhotoCollage.css';

import code from '../assets/images/Code.jpg';
import firstdog from '../assets/images/FirstDog.jpg';
import firstpub from '../assets/images/FirstPublication.jpg';
import graduate from '../assets/images/Graduate School.jpg';
import involvement from '../assets/images/Involvement.jpg';
import motivation from '../assets/images/Motivation.jpg';
import poster from '../assets/images/PosterPresentation.jpg';
import rise from '../assets/images/RISE.jpg';
import teacher from '../assets/images/Teacher.jpg';
import travel from '../assets/images/Travel.jpg';
import yosemite from '../assets/images/Yosemite.jpg';

// function importAll(r) {
//     return r.keys().map(r);
//   }
// const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));
  

const images = [code, firstpub, firstdog, graduate, involvement, motivation, rise, teacher, travel, poster, yosemite];

const PhotoCollage = () => {
    return (
        <div className='photo-container'>
        <div className="photo-collage">
            {images.map((imgSrc, index) => (
                <img 
                    key={index} 
                    src={imgSrc}
                    alt={`Collage item ${index + 1}`} 
                    className="collage-item"  
                />
            ))}
        </div>
        </div>
    );
};

export default PhotoCollage;
