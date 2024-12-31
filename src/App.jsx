import React from "react";
import Navbar from "./assets/components/Navbar";
import "./App.sass";
import Banner from "./assets/components/Banner";
import FlatGrid from "./assets/components/FlatGrid.jsx";
import Main from "./assets/components/Main.jsx";
import Footer from "./assets/components/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <FlatGrid />
      </Main>  
      <Footer />
    </div>
  );
}

export default App;
