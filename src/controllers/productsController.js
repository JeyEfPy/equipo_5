const controller = {
    detalleProductos: function (req, res) {
        res.render("products/detalleProducto")
    },  
    detalleProductosId: function (req, res,) {
        res.send("Bienvenidos al detalle de producto " + req.params.idProducto); 
    },
    detalleProductosComentario: function (req, res,) {
        if (req.params.idComentario == undefined) {
            res.send ("Bienvenido a los comentarios del Producto " + req.params.idProducto)
        } else  
        res.send("Bienvenidos a los comentarios de producto " + req.params.idProducto +
         " y etas enfocado en el comentario número " + req.params.idComentario); 
    },
} 

module.exports = controller; 