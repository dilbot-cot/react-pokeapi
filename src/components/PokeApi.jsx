// Function to fetch a single random Pokemon
export const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1; 
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return {
            name: data.name || 'Unknown', // Provide a default value in case the field is missing
            image: data.sprites.front_default || 'default-image-url.jpg', // Provide a default image URL
            cry: data.cries.latest
        };
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
        return null;
    }
};
