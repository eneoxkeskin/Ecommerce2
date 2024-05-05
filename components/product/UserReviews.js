"use  client";
import Stars from "@/components/product/Stars";
import RatingDistribution from "@/components/product/RatingDistriibution"; // Corrected spelling

export default function UserReviews({ reviews }) {
  return (
    <>
      {reviews?.length > 0 ? (
        <>
          <RatingDistribution reviews={reviews} />

          <ul className="list-group mt-4 bg-white">
            {reviews?.map((review) => (
              <li key={review._id} className="list-group-item mb-3 p-3">
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <p>
                      <strong>{review?.postedBy?.name}</strong>
                    </p>
                    <div className="flex justify-content-start align-items-start">
                      <Stars rating={review?.rating} />
                    </div>
                  </div>
                  {review?.comment && <p className="mt-1">{review.comment}</p>}
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No reviews yet.</p>
      )}
    </>
  );
}
