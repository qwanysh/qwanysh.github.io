var menuButton = document.querySelector('.menu-btn');
var hammertime = new Hammer(document.body);

hammertime.on('swipeleft', function () {
  document.body.classList.add('side-menu-active');
});

hammertime.on('swiperight', function () {
  document.body.classList.remove('side-menu-active');
});

menuButton.addEventListener('click', function () {
  document.body.classList.toggle('side-menu-active');
});