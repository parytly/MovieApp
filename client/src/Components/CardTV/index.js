import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index2';
import Back from '../Back/index2';

const Card = () => {
    const { show, flipped, flip, saveCard } = useContext(SearchContext)
    return (
        <div>
            <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>
                <Front show={show} />
                <Back show={show} saveCard={saveCard} />
            </div>
        </div>
    )
}

export default Card;