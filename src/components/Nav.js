
import React from 'react';
import VectorImage from '../assets/images/Vector.png';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand me-2" href="https://mdbgo.com/">
          <img src={VectorImage} alt="MDB Logo" loading="lazy" style={{ marginTop: "-1px" }} />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bolder">
            <li className="nav-item">
              <a className="nav-link" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MENU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">RESERVATION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ORDER ONLINE</a>
            </li>
          </ul>

          <div className="d-flex align-items-center fw-bolder">
            <button type="button" className="btn px-3 me-2">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };

