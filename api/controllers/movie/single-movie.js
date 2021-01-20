module.exports = {


  friendlyName: 'Single movie',


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
    console.log(inputs);
    var viewMovie = await Movies.findOne({id: inputs.id}).where({id: inputs.id});
    // All done.
    return(viewMovie);

  }


};
