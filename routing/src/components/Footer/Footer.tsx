
"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
    const buttonStyle={
        border: "1px solid black",
        padding: "5px",
        width: "200px",
        background: "white",
        borderRadius: "5px",
        margin: "5px"
    };
    const router = useRouter()
    const handleClick=(value: string)=>{
        if(value === "B"){
            router.back()
        }else if(value === "F"){
            router.forward()
            
        }
    }
  return (
    <>
      <footer
        style={{
          backgroundColor: "lime",
          padding: "1rem",
        }}
      >
        <h4>Footer</h4>
        <button style={buttonStyle} onClick={()=>handleClick("B")}>Back</button>
        <button style={buttonStyle} onClick={()=>handleClick("F")}>Forward</button>
      </footer>
    </>
  );
}
