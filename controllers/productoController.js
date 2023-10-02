const Producto = require("../models/Producto");
const Seller = require("../models/Seller");


exports.crearProducto = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearSeller = async (req, res) => {

    try {
        let seller;

        // Creamos nuestro producto
        seller = new Seller(req.body);

        await seller.save();
        res.send(seller);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error 2');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const producto = await Producto.find();
        res.json(producto)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerSeller = async (req, res) => {

    try {

        const seller = await Seller.find();
        res.json(seller)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error 3');
    }

}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}