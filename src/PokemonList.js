import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
      {/* put a key whenever you have create inside a loop */}
    </div>
  );
};
export default PokemonList;
