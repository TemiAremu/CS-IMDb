dbPassword = 'mongodb+srv://admin:admin@movie-xtpb4.mongodb.net/test?retryWrites=true&w=majority'

module.exports = {
    mongoURI: dbPassword,
      devServer: {
        disableHostCheck: true,
            compress: true,
  inline: true,
  allowedHosts: [
      '.amazonaws.com'
  ]
    }
};
