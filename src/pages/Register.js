import './Where.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import HeaderPage from '../components/HeaderPage';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import bg from '../img/bg5.jpg';
import RegistrationForm from '../components/RegistrationForm';

function Where() {
   return (
      <>
         <Helmet>
				<title>Registration &bull; Join The Club &bull; TRCHC</title>
			</Helmet>

			<HeaderPage
				bg={bg}
				pageName={'Registration'}
				subtitle={'Join The Club'}
				icon={<FontAwesomeIcon icon={solid('user-plus')} className="badge-icon" />}
			/>

			<motion.main
            className="container"

				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .8, ease: 'easeInOut' }}
				exit={{ opacity: 0, y: '100%' }}
         >
				<section>
					<h2 className="txt-center">Online Registration Form</h2>
                </section>

				<RegistrationForm />

			</motion.main>

			<Footer />
      </>
   );
}

export default Where;