import mongoose from 'mongoose';
import Cinema from './models/cinema';

const cinemas = [
  {
    "name": "The Birds",
    "poster-image": "poster1.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster2.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster3.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster2.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster1.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster3.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster3.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster2.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster1.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster1.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster1.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster2.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster3.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster2.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster1.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster3.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster3.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster2.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster1.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster1.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster6.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster4.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster6.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster6.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster4.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster4.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster6.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster4.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster6.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster6.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster4.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster4.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster5.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster9.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster8.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster7.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster9.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster9.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster8.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster7.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster9.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "poster8.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster7.jpg"
  }, {
    "name": "The Birds with an Extra Long Title",
    "poster-image": "poster9.jpg"
  }, {
    "name": "Rear Window",
    "poster-image": "poster9.jpg"
  }, {
    "name": "The Birds",
    "poster-image": "poster8.jpg"
  }, {
    "name": "Family Pot",
    "poster-image": "posterthatismissing.jpg"
  }
];

// Connect to MongoDB
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds161471.mlab.com:61471/cinema`);

// Go through each movie
cinemas.map(data => {
  // Initialize a model with movie data
  const cinema = new Cinema(data);
  // and save it into the database
  cinema.save(function (err) {
    if (err) {
      console.log(err);
      console.log('Cannot insert to the collection');
    } else {
      console.log('Inserted successfully');
    }
  });

});
