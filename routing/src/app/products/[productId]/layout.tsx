type ProductDetailsChildren = {
    children:React.ReactNode
  };
const ProductDetailsLayout:React.FC<ProductDetailsChildren> = ({children}) => {
  return (
    <>
        {children}
        <h2>Features Products</h2>
    </>
  )
}

export default ProductDetailsLayout