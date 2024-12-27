import React from "react";
import "./Banner.sass";

function Banner({ showTitle = true }) {
  return (
    <div className="banner">
      <img src="./public/banner.png" alt="banner" />
      {showTitle && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;
