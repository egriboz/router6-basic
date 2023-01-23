import React from "react";
import { Plane } from "react-curtains";
import { vertexShader, fragmentShader } from "../../shaders/shaders";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

function SinglePlane({ index = 1, productsData, onPlaneReady = () => { } }) {
  console.log("productsData: ", productsData[0].id);
  const uniforms = {
    planeDeformation: {
      name: "uPlaneDeformation",
      type: "1f",
      value: 0
    }
  };

  const drawCheckMargins = {
    top: 100,
    right: 0,
    bottom: 100,
    left: 0
  };

  const imageIndex = (index % 4) + 1;

  return (
    <div className="MultiplePlanes-element">
      {/* <div className="MultiplePlanes-title">{"Title " + (index + 1)}</div> */}
      <div className="MultiplePlanes-element-inner">
        <div className="MultiplePlanes-landscape">
          <div className="MultiplePlanes-landscape-inner">
            <Plane
              className="MultiplePlanes-plane"
              // plane init parameters
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
              shareProgram={true}
              widthSegments={10}
              heightSegments={10}
              drawCheckMargins={drawCheckMargins}
              uniforms={uniforms}
              // plane events
              onReady={onPlaneReady}
            >
              <Link to={`/products/${productsData[1].id}`}>
                <p>{productsData[1].title}</p>
                <motion.img layoutId={`${productsData[1].id}`} src={"https://unsplash.it/1920/1080?random=" + imageIndex}
                  data-sampler="planeTexture"
                  alt="" />
              </Link>

            </Plane>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePlane;
