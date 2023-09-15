import Hero from '../components/Hero';
import serviceImg from '../assets/3.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
function Service (){
    return(
        <>
            <Hero
                cName='hero-mid'
                heroImg={serviceImg}
                title='Service'   
                btnClass='hide'
            />

            <Trip />

            <Footer />
        </>
    )

}


export default Service;