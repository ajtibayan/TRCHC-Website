import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function BuyNowBtn() {
   const styleBtn = {
      zIndex: 999999,
      position: 'fixed',
      top: '1.5rem',
      right: '-.8rem',
      borderRadius: '0',
      borderRight: '0',
      paddingRight: '2rem',
      fontSize: '1rem',
   };

   return (
      <motion.span>
         <Link to='/register'>
         <div
         className="badge pulse"
         style={styleBtn}
         rel="noopener noreferrer"

         initial={{ opacity: 0, x: '100%' }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: .8, ease: 'easeIn' }}
      >
         <FontAwesomeIcon icon={solid('user-plus')} />
         <span style={{ marginLeft: '.5rem' }}>JOIN THE CLUB</span>
         </div>
         </Link>
      </motion.span>
   );
}

export default BuyNowBtn;