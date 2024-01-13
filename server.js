const express = require ("express");
const bodyParser = require ("body-parser");
const path = require("path");
const fs = require ("fs");

var app = express();
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + '/form.html'))
})
app.post('/formulario', function (req, res){    
    const nombre = req.body.nombre
    const password = req.body.password
    console.log(nombre);
    console.log(password);
    if(nombre === "sergio.f" && password === "1234"){
        res.send("La contraseña es correcta y se ha hecho login.")
    } else {  
        setTimeout(() => {
            res.sendFile(path.join(__dirname + '/paginaincorrecta.html'))
            // Redirigir a otra página con boton de vuelta
        }, 2000);
    }
})

app.listen(3000, function(){
    console.log("Puerto activado y funcionando en localhost:3000")
})