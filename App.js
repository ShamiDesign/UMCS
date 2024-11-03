import React, { startTransition } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import "./App.css";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import Quality from "./Quality/Quality";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
   <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Quality" element={<Quality />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
     <Footer /> 
    </BrowserRouter>
  );
};

export default App;
