import React from 'react';
import "./Footer.sass";

function Footer() {
  return (
    <div className="footer">
      <div className="Footer__logo">
        <img src="/LogoBW.png" alt="logo" />
      </div>
      <div className="footer__text">
        © 2020 Kasa. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
