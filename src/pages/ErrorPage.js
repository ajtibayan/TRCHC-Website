import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import HeaderPage from '../components/HeaderPage';
import Footer from '../components/Footer';
import bg from '../img/slider.jpg';
import err404 from '../img/404.svg';

function ErrorPage() {
   return (
      <>
			<Helmet>
				<title>Page not found &bull; Sled Halloween Demo &bull; React Multipurpose Template</title>
			</Helmet>

         <HeaderPage
				bg={bg}
				pageName={'Page not found'}
				subtitle={'Opsss!'}
				icon={<FontAwesomeIcon icon={solid('cat')} className="badge-icon" />}
			/>

			<motion.main
				className="container"

				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .8, ease: 'easeInOut' }}
				exit={{ opacity: 0, y: '100%' }}
			>
				<section className="txt-center">
					<img src={err404} className="mb-2" height="500" alt="Upss, 404 Error" />
					<p className="mb-2">Sorry, The page you're looking for doesn't exist or can't be found.</p>

					<Link to='/' className="badge">Back to Homepage</Link>
				</section>
			</motion.main>

			<Footer />
      </>
   );
}

export default ErrorPage;