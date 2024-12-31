import React from 'react';
import "./Banner.sass";

function Banner({ showTitle = true, image = "banner.png", className = "" }) {
  return (
    <div className={`banner ${className}`}>
      <img src={`./public/${image}`} alt="banner" />
      {showTitle && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}
export default Banner;