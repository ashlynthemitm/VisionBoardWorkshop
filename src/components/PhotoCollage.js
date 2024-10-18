import React from 'react';
import './PhotoCollage.css';

import coding from '../assets/images/Coding.jpeg';
import cooking from '../assets/images/Cooking.jpg';
import graduateSchool from '../assets/images/Graduate School.jpg';
import graduate from '../assets/images/Graduate.jpg';
import house from '../assets/images/House.jpg';
import instruments from '../assets/images/Instruments.png';
import crafts from '../assets/images/knitting-and-crochet.jpg';
import pets from '../assets/images/Pets.jpg';
import skates from '../assets/images/Skates.jpg';
import career from '../assets/images/appsec.webp';
import health from '../assets/images/Health.jpg';
import finance from '../assets/images/finance.jpg';
import certifications from '../assets/images/Certifications.jpg';
import travel from '../assets/images/Travel.jpg';
import involvement from '../assets/images/Involvement.jpg';


// function importAll(r) {
//     return r.keys().map(r);
//   }
// const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));
  

const images = [skates, coding, cooking, graduateSchool,
    graduate, house, instruments, crafts, pets, career,
    health, finance, certifications, travel, involvement
];

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
