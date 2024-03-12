import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className='home'>
      <img src='./restaurant.jpg' alt='restaurant' />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personnel dream Planner</h1>
          <p>"From Dreams to Reality, Let's Plan Together."</p>
          <p>We believe that it is all about the BIG DREAMS and the small details!</p>
          <Link to="contact" spy={true} smooth={true} duration={500} style={{ marginTop: '30px' }}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
