module.exports = {


  friendlyName: 'View movie',


  description: 'Display "Movie" page.',
 

  exits: {

    success: {
      viewTemplatePath: 'pages/movie/movie'
    }

  },


  fn: async function () {
    // Respond with view.
    return {};

  }


};
