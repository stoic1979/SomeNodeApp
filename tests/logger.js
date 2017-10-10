const winston = require('winston');

require('winston-loggly-bulk');

winston.loggers.add('production', {
  Loggly: {
    token: 'my-secure-token',
    subdomain: 'localhost'
  }
});

winston.loggers.add('development', {
  console: {
    level: 'silly',
    colorize: 'true',
    label: 'category one'
  },
  file: {
    filename: './somefile.log',
    level: 'warn'
  }
});


//const production = winston.loggers.get('production');
//production.info('logging from your IoC container-based logger');

const development = winston.loggers.get('development');
development.debug('logging from your IoC container-based logger - development');