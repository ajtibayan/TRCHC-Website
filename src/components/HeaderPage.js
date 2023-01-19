import './HeaderPage.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HeaderPage({ bg, pageName, subtitle, icon }) {
   return (
      <motion.header
         className="top-section"
         style={{ background: `url(${bg}) no-repeat center`, backgroundSize: 'cover' }}

         initial={{ opacity: 0, y: '100%' }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: .5, ease: 'easeInOut' }}
         exit={{ opacity: 0, y: '100%' }}
      >
         <div className="top-shadow" />
         <Link to="/" className="goback">
            <span className="sr-only">Home</span>
         </Link>

         <section>
            <h1>{pageName}</h1>
            <p className="badge">{subtitle}</p>
         </section>

         {icon}
      </motion.header>
   );
}

export default HeaderPage;