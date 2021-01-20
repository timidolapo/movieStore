
module.exports = {


  friendlyName: 'Add movie',


  description: '',


  inputs: {
    movieTitle:{
      type: 'string',
      required: true,
      maxLength: 500,
      example: 'durh hurh fihbwhs',
      description: 'This would be the movie title'

    },
    genre:{
      type: 'string',
      maxLength: 500,
      example: 'comedy-horror',
      description: 'To know the type of movie this is'

    },
    yearOfRelease:{
      type: 'number',
      example: 2000,
      description: 'to know the year it was released'
    },
    rating: {
      type: 'number',
      example: 4,
      description: 'To know how much people loved the movie'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var newMovie = await Movies.create({
      movieTitle: inputs.movieTitle,
      genre: inputs.genre,
      yearOfRelease: inputs.yearOfRelease,
      rating: inputs.rating
    }).fetch()
    // All done.
    return {  newMovie };

  }


};
