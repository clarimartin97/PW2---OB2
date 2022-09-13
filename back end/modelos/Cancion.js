const mongoose = require("mongoose");
//MODELOS
let schema = mongoose.Schema;
let cancionoSchema = new schema({
    nombre: String,
    duracion: Number,
    profesion: String
})
let Cancion = mongoose.model("cancion", cancionSchema)

module.exports=Cancion;