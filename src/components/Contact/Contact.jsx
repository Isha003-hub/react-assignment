import './Contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Get in Touch</h2>
            <form>
                <div className="form-row">
                    <div className="input-group">
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="input-group">
                    <textarea id="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>

            <div className="contact-info">
                <p><i className="fa-solid fa-location-dot"></i> Toronto, ON</p>
                <p><i className="fa-solid fa-envelope"></i> <a href="mailto:ishashah0205@gmail.com">ishashah0205@gmail.com</a></p>
                <p><i className="fa-solid fa-phone"></i> <a href="tel:+14372142110">(437) 214-2110</a></p>
            </div>
        </section>
    );
}