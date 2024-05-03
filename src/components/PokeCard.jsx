import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokeCard({ pokemon }) {
    const audioRef = useRef(null)

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
            audioRef.current.play();
        }
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pokemon.image} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={playSound}>Play Cry</Button>
                </Card.Body>
            </Card>
            {/* Audio player hidden from view, used for playing the cry */}
            <audio ref={audioRef} src={pokemon.cry} />
        </div>
    );
}

export default PokeCard;