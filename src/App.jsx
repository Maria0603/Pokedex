import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.css";

const App = () => {
  return (
    <Router basename="/Pokedex">
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;