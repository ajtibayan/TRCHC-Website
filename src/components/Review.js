import './Review.css';

function Review({ img, fullName, stars, review }) {
   return (
      <article className="review bg-light rounded">
         <img src={img} alt={fullName+' Review'} />
         <h2>{fullName}</h2>

         <span className={'rating-'+stars}></span>

         <p className="txt-left">{review}</p>
      </article>
   );
}

export default Review;