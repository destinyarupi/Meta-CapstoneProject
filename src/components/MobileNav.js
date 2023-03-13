
import { useState } from 'react';
import { GrMenu, GrClose } from 'react-icons/gr';
import './styles/MobileNav.module.css';
import NavLinks from './NavLinks';

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenuOnClick = () => setIsMenuOpen(false);

  return (
    <nav className={styles['mobile-nav']}>
      {isMenuOpen ? (
        <GrClose
          className="hamburger close-menu"
          size="20px"
          onClick={toggleMenu}
        />
      ) : (
        <GrMenu
          className="hamburger"
          size="20px"
          onClick={toggleMenu}
        />
      )}
      {isMenuOpen && <NavLinks isMobile closeMobileMenu={closeMobileMenuOnClick} />}
    </nav>
  );
}

export default MobileNav;
