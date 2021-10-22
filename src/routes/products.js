const express = require("express");
const router = express.Router(); 

router.get("/", function (req, res,) {
    res.sendFile ("../views/detalleProductos.ejs"); 
});

router.get("/:idProducto", function (req, res,) {
    res.send("Bienvenidos al detalle de producto " + req.params.idProducto); 
});

router.get("/:idProducto/comentarios/:idComentario?", 
    function (req, res,) {
    if (req.params.idComentario == undefined) {
        res.send ("Bienvenido a los comentarios del Producto " + req.params.idProducto)
    } else  
    res.send("Bienvenidos a los comentarios de producto " + req.params.idProducto +
     " y etas enfocado en el comentario número " + req.params.idComentario); 
});

module.exports = router; 