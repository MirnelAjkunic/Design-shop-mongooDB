
const mongoose = require('mongoose')
// Schema aus mongoose holen
const Schema = mongoose.Schema

// unseren Datensatz zu konfigurieren

const designShopSchema = new Schema({
    // Hier drin ist nun alles was unser Datensatz bekommen soll
    // Mongoose Validierung
    // https://mongoosejs.com/docs/validation.html
    product_name: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      picture_Link: {
        type: String,
        required: true,
      },
      link_shop: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      }
      // Timestamps erstellen ein Feld, wann der Datensatz erstellt / modifiziert wurde
},{timestamps: true})
// in dem Schema ist nun die Struktur des Datensatzes festgelegt

// Nun müssen wir aus dem Schema ein Model erstellen. Dieses umgibt das Schema und stellt die Methoden zum arbeiten mit der DB zur Verfügung. CRUD-Operationen

// Der Name ist wichtig! Er wird in der DB mit dem Plural des Namens arbeiten (hier GalleryDBs)
const ShopDesign = mongoose.model('ShopBD', designShopSchema)

// EXPORTIEREN!
module.exports = ShopDesign