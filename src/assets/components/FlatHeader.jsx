import React from 'react';
import "./FlatHeader.sass";

function FlatHeader({ flat }) {
  if (!flat) return <div>Loading...</div>;  

  const { title, location, tags, host, rating } = flat;
  
  return (
    <div className="FlatContent">
      <div className="FlatSpecs">
        <h1>{title}</h1>
        <h2>{location}</h2>
        
        <div className="tags">
          {tags && tags.map((tag, index) => (
            <span key={index}>{tag}</span>  
          ))}
        </div>
      </div>

      <div className="Flat-Owner">
        <div className="Flat-Owner-Top">
          <h3>{host?.name || "Propriétaire inconnu"}</h3>
          <div className="Flat-Owner-Pic">
            {host?.picture ? (
              <img src={host.picture} alt={host.name} />
            ) : (
              <div className="placeholder-pic">Image indisponible</div>  
            )}
          </div>
        </div>

        <div className="Flat-Rate">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={parseInt(rating) >= num ? "on" : ""}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlatHeader;
