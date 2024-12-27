import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Error.sass";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="Error__page">
      <Navbar />
      <div className="error-body">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <NavLink to="/"><p>Retourner sur la page d'accueil</p></NavLink>
      <Footer />  
    </div>
  );
};

export default Error;
