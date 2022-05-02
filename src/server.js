const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express()

const completata_val = "enzotomasivive"

app.use(cookieParser())

app.get('/', (req, res) => {
    console.log("ARRIVATA REQUEST")
    return res.send({
        timestamp: new Date().getTime(),
    })
    
})

app.get('/QpC9ZvbcR79G3HHd', (req, res) => {
    console.log("Arrivata request per primo tassello")
    var primoTassello = req.cookies.primoTassello;
    if(primoTassello == undefined){
        res.cookie('primoTassello',"QpC9ZvbcR79G3HHd", { maxAge: 900000, httpOnly: true });
    }
    console.log("Avanti")
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
        res.cookie('secondoTassello','uxDsnMVWsrM8S5KE', { maxAge: 900000, httpOnly: true })
        res.status(200).json({message:"Complimenti! Hai trovato il secondo tassello!"})
        
        return
    }
})

app.get('/3ULtNzytBQAJzkUR', (req, res) => {
    var primoTassello = req.cookies.primoTassello;
    var secondoTassello = req.cookies.secondoTassello;
    if(secondoTassello == undefined || primoTassello == undefined){
        
        res.status(401).json({message:"Spiacenti, devi prima collezionare il secondo tassello"})

    }
    if(primoTassello == "QpC9ZvbcR79G3HHd" && secondoTassello == "uxDsnMVWsrM8S5KE"){
        res.cookie('terzoTassello','3ULtNzytBQAJzkUR', { maxAge: 900000, httpOnly: true })
        res.status(200).json({message:"Complimenti! Hai trovato il terzo tassello"})
    }
    return
})

app.get('/d9JxqHn9z5pBjqvp', (req, res) => {
    var primoTassello = req.cookies.primoTassello;
    var secondoTassello = req.cookies.secondoTassello;
    var terzoTassello = req.cookies.terzoTassello;
    if(secondoTassello == undefined || primoTassello == undefined || terzoTassello == undefined){
        
        res.status(401).json({message:"Spiacenti, devi prima collezionare il terzo tassello"})

    }

    if(primoTassello == "QpC9ZvbcR79G3HHd" && secondoTassello == "uxDsnMVWsrM8S5KE" && terzoTassello =="3ULtNzytBQAJzkUR"){
        res.status(200).json({message:"Complimenti! Hai trovato tutti i tasselli, scopri ora il tuo premio!"})
    }
    return
})

app.listen(PORT, async () => {
    console.log("HTTP Server listening on port " + PORT+"...");
});
