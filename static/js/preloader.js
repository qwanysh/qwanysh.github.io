var preloader = document.querySelector('.preloader');

window.onload = preloaderOut;

var links = document.querySelectorAll('a.preloader-link');
for(var link of links) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var href = this.href;
    preloaderIn();
    setTimeout(function () {
      window.location = href;
    }, 1500);
  });
}

function preloaderOut () {
  preloader.classList.add('preloader-out');
  setTimeout(function () {
    preloader.classList.remove('preloader-out');
    preloader.classList.add('preloader-inactive');
  }, 1500);
}

function preloaderIn () {
  preloader.classList.add('preloader-in');
  setTimeout(function () {
    preloader.classList.remove('preloader-inactive');
    preloader.classList.add('preloader-active');
  }, 500);
}