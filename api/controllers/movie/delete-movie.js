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
    var deleteMovie = await Movie.destroyOne(
      {id: inputs.id}
    )
    // All done.
    return(deleteMovie);

  }


};
