// import React, { useState, useEffect } from 'react';

// import axios from 'axios';

// const Pokemon = ({ match }) => {
//   const [pokemon, setPokemon] = useState(null);

//   const fetchPokemon = async () => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
//     setPokemon(response.data);
//   };

//   useEffect(() => {
//     fetchPokemon();
//   }, [match.params.name]);

//   if (!pokemon) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{pokemon.name}</h1>
//       <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />
//     </div>
//   );
// };

// export default Pokemon;
