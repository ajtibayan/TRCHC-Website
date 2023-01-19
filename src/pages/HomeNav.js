import './HomeNav.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import useVisible from '../hooks/useVisible';
import logo from '../img/logo.png';

function HomeNav() {
   const mainNav = useRef();

   const handleMove = e => {
      e.preventDefault();
      mainNav.current.scrollLeft += e.deltaY;
   }
   
   const visible = useVisible(15);

   return (
      <>
         <Helmet>
				<title>Toronto RC Heli Club &bull; TRCHC</title>
			</Helmet>

         <motion.header
            className="logo"

            initial={{ opacity: 0, y: '100%' }}
				animate={visible ? {opacity: 0, y: -25} : {opacity: 1, y: 0} }
				transition={{ duration: .3, ease: 'easeInOut' }}
         >
            <div className="top-shadow" />
            <img src={logo} alt="TRCHC Logo" />
         </motion.header>

         <motion.main
            className="slider"
            ref={mainNav}
            onWheel={handleMove}

            initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .6, ease: 'easeInOut' }}
         >
            <nav id="navbar">
               <ul>
                  <li>
                     <Link to='/about'>
                        <section>
                           <h1>About</h1>
                           <p className="badge">RC Heli Addicts</p>
                        </section>

                        <footer>
                           <FontAwesomeIcon icon={solid('helicopter')} />
                        </footer>
                     </Link>
                  </li>

                  <li>
                     <Link to='/media'>
                        <section>
                           <h1>Media</h1>
                           <p className="badge">Pics & Vids</p>
                        </section>

                        <footer>
                           <FontAwesomeIcon icon={solid('photo-film')} />
                        </footer>
                     </Link>
                  </li>

                  <li>
                     <Link to='/events'>
                        <section>
                           <h1>Events</h1>
                           <p className="badge">Fun Fly's & More...</p>
                        </section>

                        <footer>
                           <FontAwesomeIcon icon={solid('calendar-days')} />
                        </footer>
                     </Link>
                  </li>

                  <li>
                     <Link to='/contact'>
                        <section>
                           <h1>Contact</h1>
                           <p className="badge">Let's Talk Helis</p>
                        </section>

                        <footer>
                           <FontAwesomeIcon icon={solid('helicopter-symbol')} />
                        </footer>
                     </Link>
                  </li>
               </ul>
            </nav>
         </motion.main>
      </>
   );
}

export default HomeNav;