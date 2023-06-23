// productModel.js
import db from './server'
// Set Product Schema
const schema = new db.Schema({
        _id: db.Schema.Types.ObjectId,
        name: {
          type: String,
          required: [true, 'Name field is required'],
          max: 100
        },
        price: {
          type: Number,
          required: [true, 'Price field is required']
        }
      }),
      Product = db.model('product', schema)
export default Product
