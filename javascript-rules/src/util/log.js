const winston = require('winston-color');

const info = (msg, value) => winston.log('info', msg, value);
const error = (msg, value) => winston.error('error', msg, value);

module.exports = { info, error };
