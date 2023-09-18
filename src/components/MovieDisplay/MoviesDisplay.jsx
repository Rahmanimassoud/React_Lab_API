import React from "react";

const MoviesDisplay = ({movie}) => {

    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
            </>
        )
    };

    const loading = () => {
        return (
            <h1>No Movies to Display</h1>
        )
    };

    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();

};

export default MoviesDisplay;
