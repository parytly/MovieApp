import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import NavBar from "../Components/NavBar";
import Card from '../Components/Card';
// import './App.css';

function MovieSearch() {
    // Setting our component's initial state
    const { flipped, movieSearch, movie, handleSubmitMovies, handleInputChangeMovies, saveCard } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})

    return (

        <div>
            <NavBar />
            <form>
                <div className="form-group">
                    <label>Search for Movies</label>
                    {/* <br></br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="movieFilter" value="option1"></input>
                        <label class="form-check-label" for="movieFilter">movie</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="showFilter" value="option2"></input>
                        <label class="form-check-label" for="showFilter">show</label>
                    </div> */}
                    <input id="query-input" className="form-control" onChange={handleInputChangeMovies}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitMovies}>Search</button>
            </form>
            <Card movie={movie} movieSearch={movieSearch} ></Card>
        </div>
    )
}

export default MovieSearch;