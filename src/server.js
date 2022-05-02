const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express()

const completata_val = "enzotomasivive"
app.use(express.static(__dirname + '/public'));

app.use(cookieParser())

app.get('/', (req, res) => {
    console.log("ARRIVATA REQUEST")
    return res.sendFile(path.join(__dirname,'index.html'));
    
})

app.get('/QpC9ZvbcR79G3HHd', (req, res) => {
    console.log("Arrivata request per primo tassello")
    var nTasselli = req.cookies.nTasselli;
    if(nTasselli != undefined){
        return res.sendFile(path.join(__dirname,'/pages/'+nTasselli+'.html'));

    }
    
    if(nTasselli == undefined){
        res.cookie('nTasselli',"1", { maxAge: 900000, httpOnly: true });
    }
    console.log("Avanti")
    return res.sendFile(path.join(__dirname,'/pages/1.html'));
})

app.get('/uxDsnMVWsrM8S5KE', (req, res) => {
    var nTasselli = req.cookies.nTasselli;
    if(nTasselli == undefined){
        res.status(401).json({message:"Spiacenti, devi prima collezionare il primo tassello"})
        return 
    }
    if(nTasselli != "1"){
        return res.sendFile(path.join(__dirname,'/pages/'+nTasselli+'.html'));

    }
    if(nTasselli == "1"){
        res.cookie('nTasselli','2', { maxAge: 900000, httpOnly: true })
        return res.sendFile(path.join(__dirname,'/pages/2.html'));
        
        return
    }
})

app.get('/3ULtNzytBQAJzkUR', (req, res) => {
    var nTasselli = req.cookies.nTasselli;
    if(nTasselli == undefined){
        
        res.status(401).json({message:"Spiacenti, devi prima collezionare il primo tassello"})

    }
    if(nTasselli != "2"){
        return res.sendFile(path.join(__dirname,'/pages/'+nTasselli+'.html'));

    }
    else{
        res.cookie('nTasselli','3', { maxAge: 900000, httpOnly: true })
        return res.sendFile(path.join(__dirname,'/pages/3.html'));
    }
    return
})

app.get('/d9JxqHn9z5pBjqvp', (req, res) => {
    var nTasselli = req.cookies.nTasselli;
    if(nTasselli == undefined){
        
        res.status(401).json({message:"Spiacenti, devi prima collezionare il primo tassello"})

    }
    if(nTasselli == "4"){
        return res.sendFile(path.join(__dirname,'/pages/4.html'));
    }

    if(nTasselli != "3"){
        return res.sendFile(path.join(__dirname,'/pages/'+nTasselli+'.html'));

    }
    else{
        res.cookie('nTasselli','4', { maxAge: 900000, httpOnly: true })
        return res.sendFile(path.join(__dirname,'/pages/4.html'));
    }
})

app.listen(PORT, async () => {
    console.log("HTTP Server listening on port " + PORT+"...");
});
