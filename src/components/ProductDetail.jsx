import React from "react"
import { useParams } from "react-router-dom"
import productsData from "./productsData"
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { productId } = useParams()
  const thisProduct = productsData.find(prod => prod.id === productId)

  return (
    <div>
      <h1>{thisProduct.title}</h1>
      {/* <img src={thisProduct.src} /> */}
      <motion.img layoutId={`${thisProduct.id}`} src={thisProduct.src} />
    </div>
  )
}

export default ProductDetail