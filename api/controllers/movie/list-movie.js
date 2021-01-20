

module.exports = {


  friendlyName: 'List movie',


  description: '',


  inputs: {
    
  },


  exits: {

  },


  fn: async function () {
    var movieList = await Movies.find()
    // All done.
    return(movieList);

  }


};
