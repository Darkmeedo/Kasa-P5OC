import React from 'react';
import "./Main.sass";

function Main({children}) {
  return (
    <div className="main">
      {...children}
    </div>
  )
}

export default Main
