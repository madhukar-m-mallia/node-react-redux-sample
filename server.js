import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './server/router';

// Connect to MongoDB
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds161471.mlab.com:61471/cinema`);

// Initialize http server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Static files
app.use(express.static(__dirname + '/dist'));

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/api', router);

const server = app.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
