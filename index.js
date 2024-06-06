const express = require("express");
const app = express();
const path = require('path');

// Configurando o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/adicionar", (req, res) => {
    res.render("adicionar_contatos");
});

app.get("/listar", (req, res) => {
    res.render("listar_contatos");
});

app.get("/detalhar", (req, res) => {
    res.render("detalhar_contatos");
});



app.listen(8082, () => {
    console.log("Iniciando projeto");

})