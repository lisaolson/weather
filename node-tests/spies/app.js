var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email exists
  db.saveUser({email, password});
  // save uer to db

  // send welcome email
}
