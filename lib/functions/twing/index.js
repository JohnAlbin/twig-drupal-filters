const dummyEmptyString = require('../../helpers/twing/dummyEmptyString');
const dummyPassthrough = require('../../helpers/twing/dummyPassthrough');

// eslint-disable camelcase
module.exports = {
  attach_library: dummyEmptyString,
  render_var: dummyPassthrough,
  url: dummyPassthrough,
  file_url: dummyPassthrough,
  active_theme_path: dummyPassthrough,
  active_theme: dummyPassthrough,
  path: dummyPassthrough,
  link: require('./link'),
};