const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
     return
})

app.get('/QpC9ZvbcR79G3HHd', (req, res) => {
    res.status(404).json({message: "1"})
    return
})

app.get('/uxDsnMVWsrM8S5KE', (req, res) => {
    res.status(404).json({message: "2"})
    return
})

app.get('/3ULtNzytBQAJzkUR', (req, res) => {
    res.status(404).json({message: "3"})
    return
})

app.get('/d9JxqHn9z5pBjqvp', (req, res) => {
    res.status(404).json({message: "4"})
    return
})

app.listen(8080, async () => {
    console.log(`HTTP Server listening on port ${process.env.PORT}...`);
});
