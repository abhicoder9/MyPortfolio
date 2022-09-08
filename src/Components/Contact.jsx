import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <>
            <div to="contact">
                <h2 className="contact">CONTACTS</h2>
                <section className="footer">
                    <a href="https://github.com/abhicoder9">
                        <img
                            src="https://img.icons8.com/ios/100/000000/github.png" alt="logo-github" />
                    </a>

                    <a href="mailto:srivastavabhishek089@gmail.com"><img
                        src="https://img.icons8.com/ios/100/000000/apple-mail.png" alt="" /></a>
                    <a href="https://www.instagram.com/abhisheksrivastava830/"><img
                        src="https://img.icons8.com/ios/100/000000/instagram-new.png" alt="logo-instagram" /></a>
                    <a href="https://www.linkedin.com/in/abhishek-shrivastava-0749a61b5/"><img
                        src="https://img.icons8.com/ios/100/000000/linkedin.png" alt="linkedin-logo" /></a>
                </section>
            </div>
        </>
    )
}

export default Contact;