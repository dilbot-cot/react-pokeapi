import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import { fetchRandomPokemon } from './PokeApi';  // Make sure this path is correct

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const newPokemons = await Promise.all(
                Array.from({ length: 6 }, fetchRandomPokemon)  // Fetch 6 random Pokemon
            );
            setPokemons(newPokemons);
        };

        fetchPokemons();
    }, []);

    return (
        <section className="cards">
            {pokemons.map((pokemon, index) => (
                pokemon && <PokeCard key={pokemon.name + "-" + index} pokemon={pokemon} />
            ))}
        </section>
    );
}

export default PokemonList;
