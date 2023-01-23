import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import productsData from "./productsData"
import { motion } from "framer-motion";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ProductDetail = () => {
  const { productId } = useParams()
  console.log("productId: ", productId);
  const thisProduct = productsData.find(prod => prod.id === productId)
  useEffect(() => {
    console.log("ff,");

    setTimeout(() => {
      goToTop();
      console.log("goToTop");
    }, "100")
  }, [productId]);
  return (

    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] min-h-screen">
      <div className="p-10">
        <div className="sticky top-10">
          <div className="flex justify-between mb-8">
            <Link to="/">
              - BACK
            </Link>

          </div>
          <div>

            <div>
              <h1>{thisProduct.title}</h1>
              {/* <img src={thisProduct.src} /> */}

              <p>{thisProduct.description}</p>
            </div>

          </div>
          <h2 className="text-4xl font-bold tracking-tight">photo.title</h2>
          <div className="mt-5 text-sm text-gray-600 space-y-2">
            eee
          </div>

        </div>
      </div>
      {/* <div className="overflow-hidden flex"> */}
      <section className="bg-slate-200">
        <motion.img layoutId={`${thisProduct.id}`} src={thisProduct.src} />
        <img src={thisProduct.src} />
        <img src={thisProduct.src} />
        <img src={thisProduct.src} />
      </section>
    </div>
  )
}

export default ProductDetail