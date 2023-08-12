import './contact.css';
import Topbar from '../../components/topbar/topbar';


export default function Contact() {
    return (
        <>
            <Topbar />
            <div class="container">
                <div class="contact-content">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
                    <form action="#" method="post">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>

                <footer>
                    <p>&copy; 2023 Your Website Name. All rights reserved.</p>
                </footer>
            </div>
        </>

    )
}