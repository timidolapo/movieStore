

module.exports = {


  friendlyName: 'Search movie',


  description: '',


  inputs: {
    movieTitle:{
      type: 'string',
      maxLength: 500,
      example: 'durh hurh fihbwhs',
      description: 'This would be the movie title'

    },

  },


  exits: {

  },


  fn: async function (inputs) {
    var searchMovie = await Movie.find({
      movieTitle: {'contains' : inputs.movieTitle}
    });
    // All done.
    return(searchMovie);

  }


};
