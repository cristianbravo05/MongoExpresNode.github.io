const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/sellers', require('./routes/seller'));

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('El servidor esta corriendo perfectamente en el puerto'+ PORT)
})

/*const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }*/