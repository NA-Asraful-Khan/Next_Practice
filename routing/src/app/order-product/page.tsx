"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
    const router = useRouter()
    const handleClick=()=>{
        alert("Placing Your Order")
        router.push('/');
    }
  return (
    <>
        <h1>OrderProduct</h1>
        <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default OrderProduct