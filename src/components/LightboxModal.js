import './LightboxModal.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function LightboxModal({ clickedImg, handleClose, handleNext, handlePrev }) {
   return (
      <>
         <div className="lightbox open" onClick={handleClose}>
            <FontAwesomeIcon
               icon={solid('xmark')}
               className="open"
               onClick={handleClose}
            />

            <motion.img
               className="rounded"
               src={clickedImg.src}
               key={clickedImg.src}
               alt={clickedImg.alt}

               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: .6, ease: 'easeInOut' }}
               exit={{ opacity: 0 }}
            />

            <FontAwesomeIcon
               icon={solid('arrow-left')}
               onClick={handlePrev}
            />

            <FontAwesomeIcon
               icon={solid('arrow-right')}
               onClick={handleNext}
            />
         </div>
      </>
   );
}

export default LightboxModal;