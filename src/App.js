import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeNav from './pages/HomeNav';
import Story from './pages/Story';
import Party from './pages/Party';
import EventFeatures from './pages/EventFeatures';
import Where from './pages/Where';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './components/ScrollToTop';
import BuyNowBtn from './components/BuyNowBtn';

function App() {
	const location = useLocation();
	useEffect(() => window.scrollTo(0, 0), [location]);

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomeNav />} />
				<Route path='about' element={<Story />} />
				<Route path='media' element={<Party />} />
				<Route path='events' element={<EventFeatures />} />
				<Route path='contact' element={<Where />} />
				<Route path='register' element={<Register />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>

			<ScrollToTop />
			<BuyNowBtn />
		</AnimatePresence>
	);
}

export default App;