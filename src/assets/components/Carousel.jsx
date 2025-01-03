import React, { useState } from 'react';
import './Carousel.sass'; 

const Carousel = (props) => {
    const images = props.pictures || [];  
    const [currentIndex, setCurrentIndex] = useState(0); //state  //
    
    const changeImage = (direction) => {
        let newIndex = currentIndex + direction;

        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }

        setCurrentIndex(newIndex);
    };

    if (images.length === 0) {
        return (
            <div className="carousel-container">
                <p>Aucune image disponible</p>
            </div>
        );
    }

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img
                    id="carousel-image"
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                />
                {images.length > 1 && (
                    <>
                        <div className="arrow left" onClick={() => changeImage(-1)}>
                            &#10094;
                        </div>
                        <div className="arrow right" onClick={() => changeImage(1)}>
                            &#10095;
                        </div>
                    </>
                )}

                <div id="counter" className="counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
