require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const movieSchema = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const cors = require('cors');
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('MongoDB Connected!'))
    .catch((err)=> console.log('Error!', err))

app.use(cors({origin: true}));

//Setting GraphQL
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers
}))

app.get('/', (req, res) => {
    res.send('Hello from backend app.js')
})

app.listen({port: process.env.PORT || 4000}, () => {
    console.log('Server on port 4000')
})

