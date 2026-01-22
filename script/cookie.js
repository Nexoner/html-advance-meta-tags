// Ждем полной загрузки DOM-дерева
document.addEventListener('DOMContentLoaded', () => {
    
  // 1. Находим элементы
  const cookieBlock = document.querySelector('.cookie-consent');
  const acceptBtn = document.querySelector('.accept-btn');
  const denyBtn = document.querySelector('.deny-btn');
  const closeBtn = document.querySelector('.close-btn');

  // Функция скрытия блока
  const hideCookie = () => {
      cookieBlock.style.display = 'none';
      // В будущем здесь мы добавим сохранение выбора в браузере
  };

  // 2. Назначаем действия на клики
  acceptBtn.addEventListener('click', () => {
      console.log('Пользователь принял куки');
      hideCookie();
  });

  denyBtn.addEventListener('click', () => {
      console.log('Пользователь отказался');
      hideCookie();
  });

  closeBtn.addEventListener('click', hideCookie);
});

//Создаю наблюдатель
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    //проверка в зоне ли видимости элемент
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); //добавляю класс анимации к элементу
    }
  })
}, { threshold: 0.1 }); //срабатывает когда элемент видно на 10%

const hiddenElements = document.querySelectorAll('.my_image__container, .comments-item');
hiddenElements.forEach((elem) => {
  elem.classList.add('hidden'); // сразу прячем элементы
  observer.observe(elem);
});