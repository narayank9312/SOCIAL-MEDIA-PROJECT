const {Posts, Users} = require('../db/models');

async function createNewPosts(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId,
  });
  return post;
}

/**
 * showAllPosts({username: ''})
 * showAllPosts({title: ''})
 */
async function findAllPosts(query) {
  //TODO : handle querry params
  const posts = await Posts.findAll({include: [Users]});

  return posts;
}

module.exports = {
  createNewPosts,
  findAllPosts,
};

/**
 * test code
 */

/*

async function task() {
  //   console.log(
  //     await createNewPosts(
  //       1,
  //       'this is a sample post',
  //       'body of the post goes here'
  //     )
  //   ),
  //     console.log(
  //       await createNewPosts(
  //         2,
  //         'Another is a sample post',
  //         'same body example here as well '
  //       )
  //     );

  const posts = await showAllPosts();
  for (let p of posts) {
    console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n=======\n`);
  }
}
task();
*/
