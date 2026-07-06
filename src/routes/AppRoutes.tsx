import { Routes, Route } from "react-router-dom";

const Home = () => <div>Home</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/services" element={<div>Services</div>} />
      <Route path="/portfolio" element={<div>Portfolio</div>} />
      <Route path="/industries" element={<div>Industries</div>} />
      <Route path="/career" element={<div>Career</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
  );
};

export default AppRoutes;
