const MovieStoreDb = require("../../models/MovieStoreDb");

module.exports = {


  friendlyName: 'Search movie',


  description: '',


  inputs: {
    movieTitle:{
      type: 'string',
      required: true,
      maxLength: 500,
      example: 'durh hurh fihbwhs',
      description: 'This would be the movie title'

    },

  },


  exits: {

  },


  fn: async function (inputs) {
    var searchMovie = await MovieStoreDb.
    // All done.
    return;

  }


};
