$(() => {
  $('#navbar').load('component/navbar.html', loginIfNeed);
  $('#footer').load('component/footer.html');

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
