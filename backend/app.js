const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

mongoose.connect('mongodb+srv://admin:Sweetgirl@cluster0.ehesn.mongodb.net/moviemaker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('MongoDB Connected!'))
    .catch((err)=> console.log('Error!', err))

const schema = buildSchema(`
type Query {
    name: String
}
`)

const rootValue = {
    name: ()=> {
        return 'John Wick Parebellum'
    }
}

//Setting GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue
}))

app.get('/', (req, res) => {
    res.send('Hello from backend app.js')
})

app.listen(4000, () => {
    console.log('Server on port 4000')
})

