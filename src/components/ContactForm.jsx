import './ContactFormStyles.css';

function ContactForm() {
    return(
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Subject' />
                <textarea placeholder='Massage' rows="4"></textarea>
                <button>Send Massage</button>
            </form>
        </div>
    )
}

export default ContactForm;