import React from 'react';
import Navbar from './homeComponents/Navbar'; // Import the Navbar component from the correct path
import HeroSecFour from './homeComponents/HeroSecFour';
import HeroSecFive from './homeComponents/HeroSecFive';
import HeroSecSix from './homeComponents/HeroSecSix';
import HeroSecSeven from './homeComponents/HeroSecSeven';
import HeroSecEight from './homeComponents/HeroSecEight';
import HeroSecThirteen from './homeComponents/HeroSecThirteen';
import HeroSecFourteen from './homeComponents/HeroSecFourteen';
import HeroSecFifteen from './homeComponents/HeroSecFifteen';
import HeroSecEighteen from './homeComponents/HeroSecEighteen';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSecFour/>
      <HeroSecFive/>
      <HeroSecSix/>
      <HeroSecSeven/>
      <HeroSecEight />
      <HeroSecThirteen />
      <HeroSecFourteen />
      <HeroSecFifteen/>
      <HeroSecEighteen/>
      

      {/* Rest of your home page content */}
    </div>
  );
};

export default Home;






