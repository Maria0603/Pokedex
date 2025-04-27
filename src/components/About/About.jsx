import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Pokedex</h1>
      <p>
        Welcome to the Pokedex! This application is built using React and allows
        you to explore Pokemon from the Poke mon universe. You can browse through
        a list of Pokemon, view detailed information about each Pokemon, and
        learn more about their abilities, types, and stats.
      </p>
      <p>
        The data is fetched from the{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          PokeAPI
        </a>
        , a free and open API for Pokemon data. This project is a great way to
        learn about React, hooks, and API integration.
      </p>
    </div>
  );
};

export default About;
