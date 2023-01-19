import './Where.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import HeaderPage from '../components/HeaderPage';
import ContactForm from '../components/ContactForm';
import Review from '../components/Review';
import Footer from '../components/Footer';
import bg from '../img/bg4.jpg';
import review4 from '../img/reviews/review4.jpg';

function Where() {
   return (
      <>
         <Helmet>
				<title>Contact &bull; Let's Talk Helis &bull; TRCHC</title>
			</Helmet>

			<HeaderPage
				bg={bg}
				pageName={'Contact'}
				subtitle={"Let's Talk Helis"}
				icon={<FontAwesomeIcon icon={solid('helicopter-symbol')} className="badge-icon" />}
			/>

			<motion.main
            className="container"

				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .8, ease: 'easeInOut' }}
				exit={{ opacity: 0, y: '100%' }}
         >
				<section>
					<h2 className="txt-center">TRCHC</h2>
					<h3 className="subtitle txt-center mb-2">Toronto RC Heli Club</h3>

               <div className="grid mb-2">
                  <ContactForm />

                  <ul className="contact-info">
                     <li><h2>Contact Info</h2></li>
                     <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                     <li>
                        <FontAwesomeIcon icon={solid('location-dot')} />
                        <a href="#" target="_blank" rel="noopener noreferrer">
                           <address>4716 Elgin Mills Rd E., Markham, ON</address>
                        </a>
                     </li>
                     <li>
                        <FontAwesomeIcon icon={solid('phone')} />
                        <a href="tel:">+1 234 555 6789</a>
                     </li>             
                     <li>
                        <FontAwesomeIcon icon={solid('envelope')} />
                        <a href="mailto:">info@torontorcheliclub.com</a>
                     </li>
                     <li className="txt-center">
                        <a href="https://www.facebook.com/groups/1951928118307141/" target="_blank" rel="noopener noreferrer">
                           <FontAwesomeIcon icon={brands('facebook-f')} />
                        </a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer">
                           <FontAwesomeIcon icon={brands('instagram')} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                           <FontAwesomeIcon icon={brands('twitter')} />
                        </a> */}
                     </li>
                  </ul>
               </div>
            </section>

            <section className="grid gtc-1-2">
					<Review
						img={review4}
						fullName="Review #6"
						stars={4}
						review="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea aliquam et sie commodo sed do eiusmod tempor."
					/>
               {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11495.861844818233!2d-79.32800409591225!3d43.91868914313682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52a421718a541%3A0x40d39d909fe59992!2s4716%20Elgin%20Mills%20Rd%20E%2C%20Markham%2C%20ON%20L6C%201L5!5e0!3m2!1sen!2sca!4v1674063799611!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
               <iframe className="map rounded" title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11495.861844818233!2d-79.32800409591225!3d43.91868914313682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52a421718a541%3A0x40d39d909fe59992!2s4716%20Elgin%20Mills%20Rd%20E%2C%20Markham%2C%20ON%20L6C%201L5!5e0!3m2!1sen!2sca!4v1674063799611!5m2!1sen!2sca" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            </section>
			</motion.main>

			<Footer />
      </>
   );
}

export default Where;