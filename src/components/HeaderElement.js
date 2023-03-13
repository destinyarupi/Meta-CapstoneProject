import React from 'react';
import "./styles/HeaderElement.css";
import Logo from "../components/assets/logo.jpg"
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

function Navbar() {
  const headerWrapperClasses = "header-wrapper";
  const imageWrapperClasses = "image-wrapper";
  const logoImgClasses = "logo-img";
  const altText = "Little Lemon logo";

  return (
    <div className="header">
      <div className={headerWrapperClasses}>
        <div className={imageWrapperClasses}>
          <NavLink to="/">
            <img className={logoImgClasses} src={Logo} alt={altText} />
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;
