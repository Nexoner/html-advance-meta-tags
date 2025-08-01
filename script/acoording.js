document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.btn');
  const tabContents = document.querySelectorAll('.question-object');

  // Добавить обработчики событий для каждого таба
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Убрать active у всех tab-content
      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      // Добавить active у текущего tab-content
      const currentTabContent = document.getElementById(`btn${tab.id}`);
      if (currentTabContent) {
        currentTabContent.classList.add('active');
      }
    });
  });
});
