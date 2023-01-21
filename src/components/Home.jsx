import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

  const products = productsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/products/${product.id}`}>
            <p>{product.title}</p>
            <motion.img layoutId={`${product.id}`} src={product.src} width="300" height="100" />
          </Link>
        </h3>
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      <div className="grid grid-cols-4 gap-4">
        {products}
      </div>
    </>
  );
};

export default Home;
