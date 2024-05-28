const express = require("express");
const app = express();
const path = require('path');

// Configurando o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index");
});




app.listen(8082, () => {
    console.log("Iniciando projeto");

})