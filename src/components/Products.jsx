import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { infinity } from "./infinity-scroll";

infinity.init();

const Products = () => {

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
      <div data-scroll>
        <div className="page-infinity">
          <div className="infinity e-wvw">
            <ul className="infinity__hold">
              <li className="infinity__each"><img src="https://uploads.codesandbox.io/uploads/user/659ed891-7663-4bb3-b64b-e5ecb53e492a/SLri-news5.jpg" /></li>
              <li className="infinity__each"><img src="https://uploads.codesandbox.io/uploads/user/659ed891-7663-4bb3-b64b-e5ecb53e492a/HAqq-news6.jpg" /></li>
              <li className="infinity__each"><img src="https://uploads.codesandbox.io/uploads/user/659ed891-7663-4bb3-b64b-e5ecb53e492a/SLri-news5.jpg" /></li>
              <li className="infinity__each"><img src="https://uploads.codesandbox.io/uploads/user/659ed891-7663-4bb3-b64b-e5ecb53e492a/SLri-news5.jpg" /></li>
            </ul>
          </div>
        </div>
      </div>
      {products}
    </>
  );
};

export default Products;
