import React from 'react';

const Movie = (props) => {

    return (
        <div className="card">
            <div className="container">
                <img src={props.image} alt="Jon Wick" width="10%" height="200px"/>
                <h2>{props.name}</h2>
                <h4>{props.ganre} - {props.year}</h4>

            </div>
        </div>
    );
}


export default Movie;