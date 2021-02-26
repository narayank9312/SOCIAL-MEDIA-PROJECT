const {Router} = require('express');

const route = Router();

route.get('/', (req, res) => {
  res.send('//todo all users');
});

module.exports = {
  commentsRoute: route,
};
