
import { NavLink } from 'react-router-dom';
import '../components/styles/HeroSection.css';
import heroImage from '../components/assets/gourmet.jpg';

function HeroSection() {
  const restaurantInfo = {
    name: 'Little Lemon',
    location: 'Chicago',
    description:
      'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
  };

  return (
    <div className='hero-section-background'>
      <div className='hero-section-container'>
        <div className='section-left'>
          <h1>{restaurantInfo.name}</h1>
          <h2>{restaurantInfo.location}</h2>
          <p>{restaurantInfo.description}</p>
          <NavLink to="/reservations">
            <button className={heroBackground.btn}>Reserve a Table</button>
          </NavLink>
        </div>
        <div className='section-right'>
          <div className='image-box'>
            <img src={heroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
