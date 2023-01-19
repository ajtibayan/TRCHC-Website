import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../img/logo.png';

function Footer() {
   const thisYear = new Date().getFullYear();
   return (
      <motion.footer
         initial={{ opacity: 0, y: '100%' }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: 'easeInOut' }}
         exit={{ opacity: 0, y: '100%' }}
      >
         

         <div className="container grid gtc-3-2-1 mb-2 txt-left">
            <ul className="contact-info">
               <li>
                  <img src={logo} alt="TRCHC Logo" />
               </li>
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
                  <a href="mailto:info@torontorcheliclub.com">info@torontorcheliclub.com</a>
               </li>
               <li>
                  <a href="https://www.facebook.com/groups/1951928118307141/" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={brands('facebook-f')} />
                  </a>
                  {/* Instagram and Twitter Social Links here if created
                  
                  <a href="#" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={brands('instagram')} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={brands('twitter')} />
                  </a> */}
               </li>
            </ul>

            <div></div>

            <nav className="mb-2">
               <h2 className="mb-2">Quick Links</h2>
               <ul>
                  <li><Link to ='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/media'>Media</Link></li>
                  <li><Link to ='/events'>Events</Link></li>
                  <li><Link to ='/contact'>Contact</Link></li>
                  <li><Link to ='/register'>Join</Link></li>
               </ul>
            </nav>
         </div>

         <p>&copy; TRCHC {thisYear}. All Rights Reserved.</p>
         <p>Developed by <a href="https://www.linkedin.com/in/ajtibayan/" target="_blank" rel="noopener noreferrer">A.J. Tibayan</a>.</p>
      </motion.footer>
   );
}

export default Footer;