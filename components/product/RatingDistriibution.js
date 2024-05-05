"use client";

import { FaStar, FaRegStar } from "react-icons/fa";
import { calculateAverageRating } from "@/utils/helpers";
import Stars from "@/components/product/Stars";

export default function RatingDistribution({ reviews }) {
 
  const distribution = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  let totalReviews = 0;

  reviews.forEach((review) => {
    distribution[review.rating] += 1;
    totalReviews++;
  });

 
  const ratingIcons = Object.keys(distribution).map((rating) => {
    const count = distribution[rating];
    let percentage = ((count / totalReviews) * 100).toFixed(2);
    percentage =
      parseFloat(percentage) === parseInt(percentage)
        ? parseInt(percentage)
        : percentage;

    const starIcons = Array.from({ length: parseInt(rating) }, (_, index) => (
      <FaStar key={index} className="text-danger" />
    ));
    const emptyStarIcons = Array.from(
      { length: 5 - parseInt(rating) },
      (_, index) => <FaRegStar key={index} />
    );

    return (
      <div key={rating} className="flex align-items-center">
        <div className="progress flex-grow-1 m-0 mt-1" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="flex flex-row">
          {starIcons} {emptyStarIcons} <span className="ml-1">{percentage}%</span>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-md-3 d-flex align-items-center">
        <div className="text-center">
          <p className="display-2 mb-0">
            <strong>{calculateAverageRating(reviews)?.toFixed(1)}</strong>
          </p>
         <div className="flex flex-row">
         <Stars rating={calculateAverageRating(reviews)} />
         </div>
          <p>Product Ratings</p>
        </div>
      </div>
      <div className="col-md-9">{ratingIcons.reverse()}</div>
    </div>
  );
}
