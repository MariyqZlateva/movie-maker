import React, {Component} from 'react';
import Movie from "../components/Movie";

export default class Movies extends Component {
    state = {
        movies: [
            {id: 1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
            {id: 2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
            {id: 3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
            {id: 4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
            {id: 5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
            {id: 6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
            {id: 7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"}
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.movies.map((movie) => {
                    return <Movie key={movie.id}
                                  name={movie.name}
                                  ganre={movie.genre}
                                  year={movie.year}
                                  image={movie.image}
                    />
                })}

            </div>
        );
    }

}

