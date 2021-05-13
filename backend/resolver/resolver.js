//const Movie = require('../model/model');

const movies = [
    {id: 1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
    {id: 2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
    {id: 3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
    {id: 4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
    {id: 5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
    {id: 6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"},
    {id: 7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/bhl1su"}
]


const resolvers = {
    movies: () => {
        return movies
    },
    addMovie: (args) => {
         return {
            name: args.name
         }
    }
}

module.exports = resolvers;