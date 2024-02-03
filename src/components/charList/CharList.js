import React, { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService'; 
import Spinner from '../spiner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const CharList = (props) =>  {
    let [characters, setCharacters] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)

    let marvelService = new MarvelService();

    useEffect(() => {
        updateCharacters();
    }, []);


    let updateCharacters = () => {
        marvelService
            .getAllClearCharacters()
            .then(characters => 
                setCharacters(characters),
                setLoading(false)
                )
            .catch(() => 
                setLoading(false), 
                setError(true)
            );
    }


        
        const errorMesage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {characters.map((character) => (
                        <li className="char__item" key={character.id} onClick={() => props.onCharSelected(character.id)}>
                            <img src={character.thumbnail} alt={character.name} />
                            <div className="char__name">{character.name}</div>
                        </li>
                    ))}
                </ul>
                <button className="button button__main button__long" onClick={() => updateCharacters()}>
                    <div className="inner">load more</div>
                </button>
                {errorMesage}
                {spinner}
            </div>
        );
    
}

export default CharList;
