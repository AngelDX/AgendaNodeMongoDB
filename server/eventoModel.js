const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EventoSchema = new Schema({
  titulo: { type: String, required: true },
  inicio: { type: Date, default: Date.now },
  fin: { type: String, required: false},
  horai: { type: String, required: false},
  horaf: { type: String, required: false}
});

let EventoModel = mongoose.model('Evento', EventoSchema);
module.exports = EventoModel;