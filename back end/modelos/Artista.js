const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let artistaSchema = new schema({
    nombre: String,
    edad: Number,
    genero: String
})
let Artista = mongoose.model("artista", artistaSchema)

module.exports=Artista;