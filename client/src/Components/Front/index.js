import React, { useContext } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index';
import MainArea from '../MainArea/index';
import SearchContext from "../../utils/SearchContext";

function Front() {
    const { movie } = useContext(SearchContext);

    return (
        <div className="front">
            <ImageArea movie={movie} />
            <MainArea movie={movie} />
        </div>
    )
}

export default Front;