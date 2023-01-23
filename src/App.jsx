import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import { LayoutGroup } from "framer-motion";

import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  // console.log({ scroll, limit, velocity, direction, progress })
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

export default function App() {
  return (
    <div>
      <LayoutGroup>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path="products" element={<Products />} />
            <Route exact path="products/:productId" element={<ProductDetail />} />
            <Route path="about" element={<About />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </LayoutGroup>
    </div>
  );
}

function Layout() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Products</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/nothing-here" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Nothing Here</NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}