import Hero from '../components/Hero';
import contactImg from '../assets/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
function Contact (){
    return(
        <>
            <Hero
                cName='hero-mid'
                heroImg={contactImg}
                title='Contact'   
                btnClass='hide'
            />

            <ContactForm />

            <Footer />
        </>
    )

}


export default Contact;