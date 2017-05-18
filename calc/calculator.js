const settings = require('./settings');

if (settings.greeting)
  require('./greeting.js');

const logger = require('logger.js');
const maths = require('maths');

logger(maths.add(2, 3));
