import React, { useEffect, useState } from 'react';
import "./FlatGrid.sass";
import Flat from "./Flat.jsx";

function FlatGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchFlats();
  }, []);

  function fetchFlats() {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => {
        setApartments(res);
        console.log("Apartments:", res);
      })
      .catch(console.error);
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => {
        console.log("Appartement ID:", apartment.id);
        return (
          <Flat 
            key={apartment.id}  
            title={apartment.title} 
            imageUrl={apartment.cover} 
            id={apartment.id} 
          />
        );
      })}
    </div>
  );
}

export default FlatGrid;
