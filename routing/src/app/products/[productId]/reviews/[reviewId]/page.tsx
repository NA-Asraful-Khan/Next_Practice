"use client"


import { notFound } from "next/navigation";
function getRandomInt(count:number){
  return Math.floor(Math.random()*count)
}


type ReviewDetailsParams = {
    params: {
      productId: string;
      reviewId:string
    };
  };

 

const ReviewDetail:React.FC<ReviewDetailsParams> = ({params}) => {
 
  const random = getRandomInt(2);
  if(random === 1){
    throw new Error("Error Loading Review")
  }
  
  if(parseInt(params.reviewId)>1000){
    notFound()
  }
  return (
    <h1>Review {params.reviewId} for Product {params.productId}</h1>
  )
}

export default ReviewDetail