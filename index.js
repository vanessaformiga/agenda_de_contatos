const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Realizando a conexão");
});

app.listen(8082, () => {
    console.log("Iniciando projeto");

})