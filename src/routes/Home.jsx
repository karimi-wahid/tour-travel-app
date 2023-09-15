import Hero from "../components/Hero";
import heroImg from '../assets/12.jpg';

import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero
      cName='hero'
        heroImg={heroImg}
        title='Your Journey Your Story' 
        text='Choose Your Favourite Destination' 
        buttonText='Travel Plan' 
        url='/' 
        btnClass='show' />
        
      <Destination />
      <Trip></Trip>
      <Footer />
    </>

    
  );
}

export default Home;
