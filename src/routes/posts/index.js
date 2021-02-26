const {Router} = require('express');

const {createNewPosts, findAllPosts} = require('../../controllers/posts');

const route = Router();

route.get('/', async (req, res) => {
  //res.send('//todo all users');
  const posts = await findAllPosts();
  res.status(200).send(posts);
});

route.post('/', async (req, res) => {
  const {userId, title, body} = req.body;
  if (!userId || !title || !body) {
    return res.status(400).send({
      error: 'Need uderId , title and body to create posts',
    });
  }
  const post = await createNewPosts(userId, title, body);
  res.status(201).send(post);
});

module.exports = {
  postsRoute: route,
};
