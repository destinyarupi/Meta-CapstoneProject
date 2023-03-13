
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ isMobile, closeMobileMenu }) => (
  <motion.ul className="menu-items" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} onClick={() => isMobile && closeMobileMenu()}>
      <NavLink to="/" className="active-links">Home</NavLink>
    </motion.li>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.10 }} onClick={() => isMobile && closeMobileMenu()}>
      <NavLink to="#">About</NavLink>
    </motion.li>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} onClick={() => isMobile && closeMobileMenu()}>
      <NavLink to="#">Menu</NavLink>
    </motion.li>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20 }} onClick={() => isMobile && closeMobileMenu()}>
      <NavLink to="/reservations" className="active-links">Reservations</NavLink>
    </motion.li>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} onClick={() => isMobile && closeMobileMenu()}>
      <NavLink to="#">Order Online</NavLink>
    </motion.li>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.30 }} onClick={() => isMobile && closeMobileMenu()}>
      <NavLink to="#">Login</NavLink>
    </motion.li>
    <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} onClick={() => isMobile && closeMobileMenu()} className="donate">
      <NavLink to="#">Donate</NavLink>
    </motion.li>
  </motion.ul>
);

export default NavLinks;
