import './ContactForm.css';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import emailjs from '@emailjs/browser';

const RegistrationForm = () => {
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
                emailjs.sendForm('service_tapkhu6', 'template_ef3vtfl', form.current, 'JWyYUnQ7x360eI2We')
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

         <div className="grid gtc-2-1" style={{gap: '1rem'}}>
            <label htmlFor="name">
                <FontAwesomeIcon icon={solid('user')} />
                <span className="sr-only">Name</span>
            </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={formVals.name}
                onChange={handleChange}
                style={{alignItems:'top'}}
            />
            {formErrs.name &&
                <motion.p
                className="error"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .6, ease: 'easeInOut' }}
                >{formErrs.name}</motion.p>
            }
         </div>

         <div className="grid gtc-2-1" style={{gap: '1rem'}}>
            <div>
                <label htmlFor="address">
                    <FontAwesomeIcon icon={solid('address-card')} />
                    <span className="sr-only">Address</span>
                </label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    required
                    value={formVals.address}
                    onChange={handleChange}
                    style={{alignItems:'top'}}
                />
                {formErrs.name &&
                    <motion.p
                    className="error"

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .6, ease: 'easeInOut' }}
                    >{formErrs.name}</motion.p>
                }
            </div>

            <div>
                <label htmlFor="city">
                    <FontAwesomeIcon icon={solid('city')} />
                    <span className="sr-only">City</span>
                </label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    required
                    value={formVals.city}
                    onChange={handleChange}
                    style={{alignItems:'top'}}
                />
                {formErrs.name &&
                    <motion.p
                    className="error"

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .6, ease: 'easeInOut' }}
                    >{formErrs.name}</motion.p>
                }
            </div>
        </div>

    </form>
  )
}

export default RegistrationForm