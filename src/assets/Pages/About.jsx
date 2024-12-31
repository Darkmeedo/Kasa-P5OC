import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Summary from "../components/Summary";
import "./About.sass";


const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

 
  const toggleMenu = (menu) => {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="about__content">
      <Navbar />
      <Banner image="banner2.png" showTitle={false} />
      <div className="summaries">
        <Summary
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          isOpen={isMenuOpen.fiabilite}
          toggleContent={() => toggleMenu("fiabilite")}
        />

        <Summary
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          isOpen={isMenuOpen.respect}
          toggleContent={() => toggleMenu("respect")}
        />

        <Summary
          title="Service"
          content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          isOpen={isMenuOpen.service}
          toggleContent={() => toggleMenu("service")}
        />

        <Summary
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          isOpen={isMenuOpen.securite}
          toggleContent={() => toggleMenu("securite")}
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
