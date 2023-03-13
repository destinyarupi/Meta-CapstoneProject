import React from 'react';
import styles from '../components/styles/Footer.css';
import logo from '../components/assets/logo.png';

const locations = ['Accra', 'Kumasi', 'Cape Coast', 'Tamale'];
const openingTimes = [
  { day: 'Mon - Wed', hours: '10:30AM - 12:00AM' },
  { day: 'Fri', hours: '12:00PM - 1:00AM' },
  { day: 'Sat - Sun', hours: '10:30AM - 12:00AM' },
];

const contactInfo = {
  address: '96 Abafom Road, North Ridge - Accra',
  tel: '020 7928 0678',
  email: 'info@littlelemon.com',
};

function Footer() {
  return (
      <div className="footer-background">
        <div className="footer-container">
          <img src={logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                {locations.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                {openingTimes.map(({ day, hours }) => (
                  <li key={day}>
                    {day}: {hours}
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>{contactInfo.address}</li>
                <li>Tel: {contactInfo.tel}</li>
                <li>Email: {contactInfo.email}</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
  );
}

export default Footer;

