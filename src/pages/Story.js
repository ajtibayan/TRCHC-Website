import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import HeaderPage from '../components/HeaderPage';
import Review from '../components/Review';
import Footer from '../components/Footer';
import bg from '../img/bg.jpg';
import moon from '../img/heli.webp';
import about from '../img/about.png';
import review5 from '../img/reviews/review5.jpg';
import review6 from '../img/reviews/review6.jpg';

function Story() {
	return (
		<>
			<Helmet>
				<title>About &bull; RC Heli Addicts &bull; TRCHC</title>
			</Helmet>

			<HeaderPage
				bg={bg}
				pageName={'About'}
				subtitle={'RC Heli Addicts'}
				icon={<FontAwesomeIcon icon={solid('helicopter')} className="badge-icon" />}
			/>

			<motion.main
				className="container"

				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .8, ease: 'easeInOut' }}
				exit={{ opacity: 0, y: '100%' }}
			>
				<section className="mb-2">
					<h2 className="txt-center">Title #1</h2>
					<h3 className="subtitle txt-center mb-2">Title Caption</h3>

					<div className="grid">
						<article>
							<h2 className="mb-2">Sub Title #1</h2>
							<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<p className="mb-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							{/* <a href="#" className="badge" target="_blank" rel="noopener noreferrer">Read more</a> */}
						</article>

						<img src={about} alt="About Images" />
					</div>
				</section>

				{/* <section className="grid gtc-x3 txt-center bg-violet rounded mb-2">
					<article>
						<i className="badge-icon mb-2">
							<FontAwesomeIcon icon={solid('skull-crossbones')} />
						</i>
						<h2>NOT ALIVE</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</article>

					<article>
						<i className="badge-icon mb-2">
							<FontAwesomeIcon icon={solid('hat-wizard')} />
						</i>
						<h2>BLACK MAGIC</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</article>

					<article>
						<i className="badge-icon mb-2">
							<FontAwesomeIcon icon={solid('toilet-paper')} />
						</i>
						<h2>SCARED</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</article>
				</section> */}

				<section>
					<div className="grid">
						<img src={moon} className="pulse" alt="RC Heli" />

						<article>
							<h2 className="mb-2">Subtitle #2</h2>
							<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							{/* <a href="#" className="badge" target="_blank" rel="noopener noreferrer">Read more</a> */}
						</article>
					</div>
				</section>

				<section className="grid">
					<Review
						img={review5}
						fullName="Review #1"
						stars={3}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis."
					/>

					<Review
						img={review6}
						fullName="Review #2"
						stars={5}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis."
					/>
				</section>
			</motion.main>

			<Footer />
		</>
	);
}

export default Story;