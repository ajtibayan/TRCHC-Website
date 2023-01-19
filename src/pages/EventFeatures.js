import './EventFeatures.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import HeaderPage from '../components/HeaderPage';
import Review from '../components/Review';
import Footer from '../components/Footer';
import bg from '../img/bg3.jpg';
import food from '../img/food.jpg';
import surprise from '../img/surprise.jpg';
import outfit from '../img/outfit.jpg';
import about3 from '../img/about3.png';
import review1 from '../img/reviews/review1.jpg';

function EventFeatures() {
	return (
		<>
			<Helmet>
				<title>Events &bull; Fun Fly's & More... &bull; TRCHC</title>
			</Helmet>

			<HeaderPage
				bg={bg}
				pageName={'Events'}
				subtitle={"Fun Fly's & More..."}
				icon={<FontAwesomeIcon icon={solid('calendar-days')} className="badge-icon" />}
			/>

			<motion.main
				className="container"

				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .8, ease: 'easeInOut' }}
				exit={{ opacity: 0, y: '100%' }}
			>
				<section className="txt-center">
					<h2>Title #1</h2>
					<h3 className="subtitle mb-2">Title Caption</h3>
				
					<div className="grid gtc-x3 mb-2 txt-left">
						<article>
							<img src={food} className="rounded mb-2" alt="Fun Fly" />

							<h3 className="subtitle">Event #1</h3>
							<h2>Fun Fly</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
						</article>

						<article>
							<img src={surprise} className="rounded mb-2" alt="Swar Meet" />

							<h3 className="subtitle">Event #2</h3>
							<h2>Swap Meet</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
						</article>

						<article>
							<img src={outfit} className="rounded mb-2" alt="BBQ" />

							<h3 className="subtitle">Event #3</h3>
							<h2>BBQ</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
						</article>
					</div>

					<h2>Come on!</h2>
					<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore amet ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, incididunt ut sie lotim ex labore macenates.</p>
				</section>

				<section className="txt-center">
					<h2>Fly With Friends</h2>
					<h3 className="subtitle mb-2">Join The Fun</h3>

					<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>

				</section>

				<section className="grid">
					<Review
						img={review1}
						fullName="Review #5"
						stars={5}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea aliquam et sie commodo."
					/>

					<img src={about3} className="rounded" alt="Team Image" />
				</section>
			</motion.main>

			<Footer />
		</>
	);
}

export default EventFeatures;