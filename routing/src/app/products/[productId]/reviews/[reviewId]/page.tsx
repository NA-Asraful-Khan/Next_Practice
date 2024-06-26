import { Metadata } from "next";
import { notFound } from "next/navigation";

type ReviewDetailsParams = {
    params: {
      productId: string;
      reviewId:string
    };
  };

export const generateMetadata = ({ params }: ReviewDetailsParams): Metadata => {
    return {
      title: `Review ${params.reviewId}`,
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