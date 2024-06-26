import { notFound } from "next/navigation";

type ReviewDetailsParams = {
    params: {
      productId: string;
      reviewId:string
    };
  };
const ReviewDetail:React.FC<ReviewDetailsParams> = ({params}) => {
  if(parseInt(params.reviewId)>1000){
    notFound()
  }
  return (
    <h1>Review {params.reviewId} for Product {params.productId}</h1>
  )
}

export default ReviewDetail