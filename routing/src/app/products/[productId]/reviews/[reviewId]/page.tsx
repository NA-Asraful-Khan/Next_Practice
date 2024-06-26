type ReviewDetailsParams = {
    params: {
      productId: string;
      reviewId:string
    };
  };
const ReviewDetail:React.FC<ReviewDetailsParams> = ({params}) => {
  return (
    <h1>Review {params.reviewId} for Product {params.productId}</h1>
  )
}

export default ReviewDetail