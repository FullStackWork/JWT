const bcrypt = require('bcrypt');
console.log('working...');

const password = 'newPassword';
const saltRounds = 10;

// const hashedPassword = bcrypt.hash(
//   password,
//   saltRounds,
//   function (err, result) {
//     return result;
//   }
// );

// console.log(hashedPassword);
// bcrypt.genSalt(saltRounds, function (err, salt) {
//   return bcrypt.hash(password, salt, function (err, hash) {
//     return hash;
//   });
// });
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
console.log(hash);
