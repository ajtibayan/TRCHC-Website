import './ScrollToTop.css';
import useVisible from '../hooks/useVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function ScrollToTop() {
   const visible = useVisible(180),
         handleGoTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

   return (
      <button
         className={visible ? 'gotop visible' : 'gotop'}
         onClick={handleGoTop}
      >
         <FontAwesomeIcon icon={solid('angle-up')} />
      </button>
   );
}

export default ScrollToTop;