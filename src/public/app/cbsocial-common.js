$(() => {
  $('#navbar').load('component/navbar.html', loginIfNeed);
  $('#footer').load('component/footer.html');
  $('#content').load('component/all-posts.html', loadPosts);

  //   loginIfNeed();
});

function loginIfNeed() {
  //   function updateUserNameInNav() {
  //     $('#nav-username').text(username);
  //   }
  window.currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  //

  if (!currentUser) {
    $.post('/api/users', {}, (user) => {
      //   console.log(user);
      if (user) {
        console.log('registered current user as ', user.uername);
        window.localStorage.user = JSON.stringify(user);
        currentUser = user;
        console.log($('#nav-username'));
        $('#nav-username').text(currentUser.username);
      }
    });
  } else {
    console.log('resuming session as ', currentUser.username);
    console.log($('#nav-username'));
    $('#nav-username').text(currentUser.username);
  }
}

function loadPosts() {
  $.get('/api/posts', (posts) => {
    for (let p of posts) {
      //   console.log(p);
      $('#posts-container').append(
        $(`
        <div class="col-4">
        
        <div class="card m-2" >
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
          <p class="card-text">
            ${p.body.substr(0, 200)}
             ...<a href="#">...read more..></a>
          </p>
          <a href="#" class="card-link">Comments</a>
          <a href="#" class="card-link">Like</a>
        </div>
      </div>


        </div>
        
      
      
        `)
      );
    }
  });
}
