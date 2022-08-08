const jwt = require('jsonwebtoken');
let id = '12345';
let username = 'Gogo';

const payload = {id, username};
const options = {expiresIn: '2d'};
const secret = 'MySuperPrivateSecret';
const token = jwt.sign(payload, secret, options);

console.log(token);

const decodedToken = jwt.verify(token, secret);
console.log(decodedToken);