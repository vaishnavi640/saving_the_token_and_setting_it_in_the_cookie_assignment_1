const jwt = require('jsonwebtoken');

const encrypt = (payload) => { 
  // encrypt the payload and return token
  return jwt.sign(payload, 'root', { expiresIn: '1h' });
};

const decrypt = (token) => {
  // return decoded payload
  const decoded = jwt.verify(token, 'root');
  return decoded;
};

module.exports = {
  encrypt,
  decrypt
};