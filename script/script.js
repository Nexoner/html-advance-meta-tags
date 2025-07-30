const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

console.log(tabs);
console.log(tabContent);

tabContent.forEach((content) => {
  content.style.display = 'none';
});

const firstTabContent = document.getElementById('content1');
console.log(firstTabContent);
firstTabContent.style.display = 'block';

tabs.forEach((tab) => {
  addEventListener('click', function () {
    tabContent.forEach((content) => {
      content.style.display = 'none';
    });

    const currentTabContent = document.getElementById(this.id.slice(0, -1));
    if (currentTabContent) {
      currentTabContent.style.display = 'block';
    }
  });
});
