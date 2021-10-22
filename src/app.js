const express = require ("express"); 
const app = express(); 
const rutasProductos = require ("./routes/products.js")
const rutasMain = require("./routes/main.js")
const rutasUsers = require("./routes/users.js")
const path = require("path");


app.use(express.static(path.resolve(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use("/", rutasMain)
app.use("/users", rutasUsers)
app.use("/products", rutasProductos)


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.ejs'));
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