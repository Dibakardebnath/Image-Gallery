import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";


export const AllRoute=()=> {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
  );
}

