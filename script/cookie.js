const cookieContainer = document.querySelector('.cookie-consent');
const confirmbtn = document.querySelector('.accept-btn');
const closebtn = document.querySelector('.close-btn');

confirmbtn.addEventListener('click', function () {
  cookieContainer.style.display = 'none';
});

closebtn.addEventListener('click', function () {
  cookieContainer.style.display = 'none';
});
