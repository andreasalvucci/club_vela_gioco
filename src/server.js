const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/QpC9ZvbcR79G3HHd', (req, res) => {
    var primoTassello = req.cookies.primoTassello;
    if(primoTassello == undefined){
        res.cookie('primoTassello',"QpC9ZvbcR79G3HHd", { maxAge: 900000, httpOnly: true });
    }
    res.status(200).json({message:"Complimenti! Hai trovato il primo tassello"})
    return
})

app.get('/uxDsnMVWsrM8S5KE', (req, res) => {
    var primoTassello = req.cookies.primoTassello;
    if(primoTassello == undefined){
        res.status(401).json({message:"Spiacenti, devi prima collezionare il primo tassello"})
        return
    }
    if(primoTassello == "QpC9ZvbcR79G3HHd"){
        res.status(200).json({message:"Complimenti! Hai trovato il secondo tassello!"})
    }
    return
})

app.get('/3ULtNzytBQAJzkUR', (req, res) => {
    return
})

app.get('/d9JxqHn9z5pBjqvp', (req, res) => {
    return
})

app.listen(8080, async () => {
    console.log(`HTTP Server listening on port ${process.env.PORT}...`);
});
