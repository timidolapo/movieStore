module.exports = {


  friendlyName: 'Delete movie',


  description: '',


  inputs: {
    id:{
      type: 'number',
      example: 4,
      description: "The unique code for each movie"

    }

  },


  exits: {

  },


  fn: async function (inputs) {
    var deleteMovie = await Movie.isdeleted
    // All done.
    return;

  }


};
