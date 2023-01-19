import './Party.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import HeaderPage from '../components/HeaderPage';
import Review from '../components/Review';
import Footer from '../components/Footer';
import bg from '../img/bg2.jpg';
import review2 from '../img/reviews/review2.jpg';
import review3 from '../img/reviews/review3.jpg';
import Gallery from '../components/Gallery';
import React from 'react';
import ReactPlayer from 'react-player/youtube';

function Party() {
	return (
		<>
			<Helmet>
				<title>Media &bull; Pics & Vids &bull; TRCHC</title>
			</Helmet>

			<HeaderPage
				bg={bg}
				pageName={'Media'}
				subtitle={'Pics & Vids'}
				icon={<FontAwesomeIcon icon={solid('photo-film')} className="badge-icon" />}
			/>

			<Gallery />

			<motion.main
				className="container"

				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: .8, ease: 'easeInOut' }}
				exit={{ opacity: 0, y: '100%' }}

				
			>

				<section className="grid">
					<ReactPlayer 
						className='react-player'
						url='https://www.youtube.com/watch?v=75Vy0-lDYD8' 
						width='100%'
					/>
					<ReactPlayer 
						className='react-player'
						url='https://www.youtube.com/watch?v=s2SkYSM7uyE' 
						width='100%'
					/>
					<ReactPlayer 
						className='react-player'
						url='https://www.youtube.com/watch?v=-lN52b4Z-G0&t=126s' 
						width='100%'
					/>
					<ReactPlayer 
						className='react-player'
						url='https://www.youtube.com/watch?v=n0MO7-etUGg&t=3s' 
						width='100%'
					/>
				</section>

				<section className="grid">
					<Review
						img={review2}
						fullName="Review #3"
						stars={4}
						review="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea aliquam et sie commodo sed do eiusmod tempor."
					/>
					
					<Review
						img={review3}
						fullName="Review #4"
						stars={3}
						review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis."
					/>
				</section>
			</motion.main>

			<Footer />
		</>
	);
}

export default Party;