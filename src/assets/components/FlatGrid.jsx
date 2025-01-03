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
      })
      .catch(console.error);
  }

  // Lors du chargement du composant, fetchFlats est exécuté pour aller chercher les données JSON.
// Les données récupérées sont stockées dans l'état apartments.
// Les appartements sont ensuite affichés en utilisant map et chaque élément est passé au composant Flat via des props.//

  return (
    <div className="grid">
      {apartments.map((apartment) => {
        
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
