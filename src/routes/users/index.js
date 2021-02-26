const {Router} = require('express');
const {
  createAnonUser,
  getUserById,
  getUserByUsername,
} = require('../../controllers/users');

const route = Router();

route.get('/:id', async (req, res) => {
  //console.log('users');
  let user;
  console.log(req.params.id);
  if (isNaN(parseInt(req.params.id))) {
    //when params is username
    user = await getUserByUsername(req.params.id);
  } else {
    //when params is user id
    user = await getUserById(req.params.id);
  }

  console.log(user);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({
      error: 'no sunch user id or username',
    });
  }
});

route.post('/', async (req, res) => {
  const user = await createAnonUser();
  res.status(200).send(user);
});

module.exports = {
  usersRoute: route,
};
