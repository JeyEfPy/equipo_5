const express = require("express");

const { detalleProductosComentario } = require("../controllers/productsController");
const router = express.Router(); 
const controller = require("../controllers/productsController");

router.get("/detalleProductos", controller.detalleProductos);

router.get("/:idProducto?", controller.detalleProductosId);

router.get("/:idProducto?/comentarios/:idComentario?", detalleProductosComentario);

module.exports = router; 