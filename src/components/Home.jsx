import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {

  // gsap.registerPlugin(ScrollTrigger);

  // const ref = useRef(null);

  // console.log("ref: ", ref);

  // useEffect(() => {

  //   const element = ref.current;
  //   ScrollTrigger.create({
  //     trigger: "#ref",
  //     start: 0,
  //     end: "max",
  //     onLeave: self => {
  //       self.scroll(1);
  //       ScrollTrigger.update();
  //     },
  //     onLeaveBack: self => {
  //       self.scroll(ScrollTrigger.maxScroll(window) - 1);
  //       ScrollTrigger.update();
  //     }

  //   });
  //   return () => {
  //     ScrollTrigger.getAll().forEach(t => t.kill());
  //   }
  // }, [ref])

  const products = productsData.map(product => {
    return (
      <div key={`${product.id}`}>
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
      <h1>Home Page</h1>
      {/* <div ref={ref} id="ref" className="grid grid-cols-4 gap-4"> */}
      <div id="ref" className="grid grid-cols-4 gap-4">
        {products}
      </div>
    </>
  );
};

export default Home;
