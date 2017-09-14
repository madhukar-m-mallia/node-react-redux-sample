import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

// Define movie schema
var cinemaSchema = new Schema({
  "name": String,
  "poster-image": String
}, { 
  versionKey: false 
}).plugin(mongoosePaginate);

// Export Mongoose model
export default mongoose.model('cinema', cinemaSchema);