   
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get ("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.get ("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
})

app.get ("/detalleProducto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/detalleProducto.html"));
})

app.listen(3100, () => console.log('Server corriendo en el puerto 3100'));