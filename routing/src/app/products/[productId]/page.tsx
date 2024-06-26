import { Metadata } from "next";

type ProductDetailsParams = {
  params: {
    productId: string;
  };
};


export const generateMetadata = async ({ params }: ProductDetailsParams):Promise<Metadata>  => {
  const title = await new Promise((resolve)=>{
    resolve(`iPhone ${params.productId}`)
  })
  return {
    title: `Product ${title}`,
  };
};


const ProductDetails = ({ params }:ProductDetailsParams) => {
    return (
      <h1>Details About Product {params.productId}</h1>
    );
  };
  
  export default ProductDetails;
