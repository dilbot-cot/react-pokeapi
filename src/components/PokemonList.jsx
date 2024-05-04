import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import { fetchRandomPokemon } from './PokeApi'; 

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const newPokemons = await Promise.all(
                Array.from({ length: 6 }, fetchRandomPokemon) 
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
