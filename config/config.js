var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost/iotexpress-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost/iotexpress-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'iotexpress'
    },
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost/iotexpress-production'
  }
};

module.exports = config[env];
