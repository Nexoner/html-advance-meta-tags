
const logBtns = document.querySelectorAll('.log__btn');
const logCard = document.querySelector('.testimonial-card');
const closeBtn = document.querySelector('.btn-con');

logBtns.forEach((e) => {
    e.addEventListener('click', function() {
        if (logCard.classList.contains('hidden')) {
            logCard.classList.remove('hidden');
        } else {
            logCard.classList.add('hidden');
        }
    })
})

closeBtn.addEventListener('click', function() {
    logCard.classList.add('hidden');
})