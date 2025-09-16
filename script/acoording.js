document.addEventListener('DOMContentLoaded', function () {

const btns = document.querySelectorAll('.btn')
const btnContents = document.querySelectorAll('.question-object')

btns.forEach((btn) => {
    btn.addEventListener('click', function() {

        console.log(btn);
        console.log(btns);
        console.log(btnContents);

            btnContents.forEach((content) => {
                content.classList.remove('active')
            })

            const currentContent = document.getElementById(`ques${btn.id}`);
            console.log(currentContent)

            if (currentContent) {
                currentContent.classList.add('active')
            }
        });
    });
});