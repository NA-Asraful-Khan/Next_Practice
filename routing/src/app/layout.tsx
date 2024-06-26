import Footer from "@/components/Footer/Footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
  title:{
    absolute:'',
    default:'Next.js Practice - Self',
    template:'%s | Codevolution'
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header 
        style={{
          backgroundColor:"lightblue",
          padding:"1rem"
        }}
        >
          <h4>Header</h4>
          <Link href={'/'}>Home</Link>
          <Link href={'/products'}>-Products</Link>
          <Link href={'/register'}>-Register</Link>
          <Link href={'/order-product'}>-PlaceOrder</Link>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
