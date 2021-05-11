const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from backend app.js')
})

app.listen(4000, ()=>{
    console.log('Server on port 4000')
})

