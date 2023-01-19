import './ContactForm.css';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import emailjs from '@emailjs/browser';

function ContactForm() {
   const form = useRef();
   const initValue = { name:'', email: '', message:'' };
   const [formVals, setFormVals] = useState(initValue),
         [formErrs, setFormErrs] = useState({}),
         [isSubmit, setIsSubmit] = useState(false),
         [isSent, setIsSent] = useState(false);

   const handleChange = e => {
      const { id, value } = e.target;
      setFormVals({ ...formVals, [id]: value });
   };
   
   const handleSubmit = e => {
      e.preventDefault();
      setFormErrs(validate(formVals));
      setIsSubmit(true);
   };

   useEffect(() => {
      if(Object.keys(formErrs).length === 0 && isSubmit) {
         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then(result => {
               console.log(result.text);
               setFormVals(initValue);
               setIsSent(true);
               setFormErrs({});
               setIsSubmit(false);
            }, error => {
               console.log(error.text);
               setIsSubmit(false);
               setIsSent(false);
            }
         );
      }
   }, [formErrs, isSubmit]);

   useEffect(() => {
		if(isSent) {
			const msgSent = setTimeout(()=>setIsSent(false), 5000);
			return () => clearTimeout(msgSent);
		}
	}, [isSent]);

   const validate = (vals) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
      if (!vals.name) {
         errors.name = 'Name is required!';
      } else if (vals.name.length < 4) {
         errors.name = 'Enter at least 4 characters!';
      }

      if (!vals.email) {
        errors.email = 'Email is required!';
      } else if (!regex.test(vals.email)) {
        errors.email = 'This is not a valid email format!';
      }
      
      return errors;
   };

   return (
      <form ref={form} onSubmit={handleSubmit}>

         <label htmlFor="name">
            <FontAwesomeIcon icon={solid('user')} />
            <span className="sr-only">Your Name</span>
         </label>
         <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formVals.name}
            onChange={handleChange}
         />
         {formErrs.name &&
            <motion.p
               className="error"

               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: .6, ease: 'easeInOut' }}
            >{formErrs.name}</motion.p>
         }
         
         <label htmlFor="email">
            <FontAwesomeIcon icon={solid('envelope')} />
            <span className="sr-only">Your Email</span>
         </label>
         <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formVals.email}
            onChange={handleChange}
         />
         {formErrs.email &&
            <motion.p
               className="error"
               
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: .6, ease: 'easeInOut' }}
            >{formErrs.email}</motion.p>
         }

         <label htmlFor="message">
            <FontAwesomeIcon icon={solid('comment-dots')} />
            <span className="sr-only">Your Message</span>
         </label>
         <textarea
            id="message"
            name="message"
            rows="10"
            placeholder="Your Message"
            value={formVals.message}
            onChange={handleChange}
         />

         {isSent &&
            <motion.h3
               className="sent"

               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: .6, ease: 'easeInOut' }}
            >Successful submission!</motion.h3>
         }

         <button type="submit" value="submit">
            <FontAwesomeIcon icon={solid('paper-plane')} />
            <span className="sr-only">Send Now</span>
         </button>
      </form>
   );
}

export default ContactForm;