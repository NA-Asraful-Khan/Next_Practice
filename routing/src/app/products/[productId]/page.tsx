type ProductDetailsParams = {
    params: {
      productId: string;
    };
  };

const ProductDetails: React.FC<ProductDetailsParams> = ({ params }) => {
    return (
      <h1>Details About Product {params.productId}</h1>
    );
  };
  
  export default ProductDetails;
