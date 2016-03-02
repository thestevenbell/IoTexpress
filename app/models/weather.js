// Weather model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var WeatherSchema = new Schema({
  device: String,
  temperature: String,
  humidity: String
});

WeatherSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Weather', WeatherSchema);

