import React from 'react'
import "../style/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            <div className='name'>
                <h1>Fashion Collection</h1>
            </div>
            <div className='subdivison'>
                <div className="quicklinks">
                    <h1>Quick Lines</h1>
                    <a className="nav-link active " aria-current="page" href="/"><FontAwesomeIcon icon={faArrowRight} /> Home</a>
                    <a className="nav-link " href="/products"><FontAwesomeIcon icon={faArrowRight} /> Products</a>
                    <a className="nav-link " href="/about"><FontAwesomeIcon icon={faArrowRight} /> About Us</a>
                    <a className="nav-link " href="/cart"><FontAwesomeIcon icon={faArrowRight} /> Cart</a>
                </div>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <a href="tel: +22 2444 0822" class="links"><FontAwesomeIcon icon={faPhone} />  +022 2444 0822</a>
                    <a href="tel: +22 2854 0932" class="links"><FontAwesomeIcon icon={faPhone} /> +022 2854 0932</a>
                    <a href="mailto: xyz@gmail.com" class="links" id="ownemail"><FontAwesomeIcon icon={faEnvelope} /> xyz@gmail.com</a>
                    <a href="#" class="links"><FontAwesomeIcon icon={faLocationDot} /> India.</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;