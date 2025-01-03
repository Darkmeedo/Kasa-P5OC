import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FlatPage.sass";
import "../components/Summary.sass";
import Summary from '../components/Summary';
import Carousel from '../components/Carousel';
import FlatHeader from '../components/FlatHeader';
import { useParams, useNavigate } from 'react-router-dom';

function FlatPage() {
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const { id } = useParams();  
  const navigate = useNavigate();

  useEffect(() => {  //permet de gérer un effet secondaire, ici l'appel au JSON pour récupérer les données //
    fetchApartmentData();
  }, [id]);  

  function fetchApartmentData() {
    fetch("/db.json")  
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);  
        if (flat) {
          setSelectedFlat(flat);  
        } else {
          navigate("/404");  
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des données :", err);
      });
  }

  if (!selectedFlat) return <div>Loading...</div>;  
  return (
    <div className="Appartment">
      <Navbar />
      <div className="FlatPic">
        <Carousel pictures={selectedFlat.pictures} />
      </div>

      <FlatHeader flat={selectedFlat} />

      <div className="Flat-Menus">
       
        <Summary
          title="Description"
          content={selectedFlat.description}
          isOpen={showDescription}
          toggleContent={() => setShowDescription(!showDescription)}
        />

        
        <Summary
          title="Équipements"
          content={
            <ul>
              {selectedFlat.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
          isOpen={showEquipments}
          toggleContent={() => setShowEquipments(!showEquipments)}
        />
      </div>

      <Footer />
    </div>
  );
}

export default FlatPage;
