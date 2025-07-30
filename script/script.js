document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  // Скрыть все tab-content по умолчанию
  tabContents.forEach((content) => {
    content.style.display = 'none';
  });

  // Отобразить первый tab-content по умолчанию
  const firstTabContent = document.getElementById('content1');
  if (firstTabContent) {
    firstTabContent.style.display = 'block';
  }

  // Добавить обработчики событий для каждого таба
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Скрыть все tab-content
      tabContents.forEach((content) => {
        content.style.display = 'none';
      });

      // Отобразить текущий tab-content
      const currentTabContent = document.getElementById(
        `tab${this.id.slice(0, -1)}`
      );
      console.log(currentTabContent);
      if (currentTabContent) {
        currentTabContent.style.display = 'block';
      }
    });
  });
});
