import './Gallery.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { hwGallery } from '../data.js';
import LightboxModal from '../components/LightboxModal';

function Gallery() {
   const [clickedImg, setClickedImg] = useState(null),
         [currentIdx, setCurrentIdx] = useState(null),
         imgsLength = hwGallery.length;

   const handleOpen = (img, idx) => {
      setClickedImg(img);
      setCurrentIdx(idx);
   };
   
   const handleNext = () => {
      if(currentIdx + 1 >= imgsLength) {
         setCurrentIdx(0);
         setClickedImg(hwGallery[0]);
         return;
      }

      const newIdx = currentIdx + 1;
      setCurrentIdx(newIdx);
      setClickedImg(hwGallery[newIdx]);
   };
  
   const handlePrev = () => {
      if(currentIdx === 0) {
         const newIdx = imgsLength - 1;
         setCurrentIdx(newIdx);
         setClickedImg(hwGallery[newIdx]);
         return;
      }
      
      const newIdx = currentIdx - 1;
      setCurrentIdx(newIdx);
      setClickedImg(hwGallery[newIdx]);
   };

   const handleClose = e => e.target.classList.contains('open') ? setClickedImg(null) : null;
  
   return (
      <motion.section
         className="gallery"

         initial={{ opacity: 0, y: '100%' }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: .8, ease: 'easeInOut' }}
         exit={{ opacity: 0, y: '100%' }}
      >

         {hwGallery.map((img, idx) =>
               <motion.img
                  key={idx}
                  src={img.src}
                  className={img.x2 === true ? 'span2' : null}
                  alt={img.alt}
                  onClick={()=>handleOpen(img, idx)}

                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .8, ease: 'easeInOut' }}
                  exit={{ opacity: 0, y: '100%' }}
               />
            )}
            
            {clickedImg && (
               <LightboxModal
                  clickedImg={clickedImg}
                  handleClose={handleClose}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
               />
            )}
      </motion.section>
   );
}

export default Gallery;