document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  // Отобразить первый tab по умолчанию
  const firstTabContent = document.getElementById('contenttab1');
  if (firstTabContent) {
    firstTabContent.classList.add('active');
  }

  // Добавить обработчики событий для каждого таба
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Убрать active у всех tab-content
      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      // Добавить active у текущего tab-content
      const currentTabContent = document.getElementById(`content${tab.id}`);
      if (currentTabContent) {
        currentTabContent.classList.add('active');
      }
    });
  });
});
