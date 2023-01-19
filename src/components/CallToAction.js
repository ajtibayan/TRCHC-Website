import { Link } from "react-router-dom";

function CallToAction({ title, text, toPage, label }) {
   return (
      <section className="bg-light p-1 txt-center rounded">
         <h2>{title}</h2>
         <p className="mb-2">{text}</p>

         <Link to={toPage} className="badge">{label}</Link>
      </section>
   );
}

export default CallToAction;