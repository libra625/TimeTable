const toggleBtn = document.querySelector('.toggle-week-btn');
const currentWeek = document.querySelector('.current-week-display');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('odd-week-active');

    if (document.body.classList.contains('odd-week-active')) {
        currentWeek.textContent = 'Displays: odd week';
    } else {
        currentWeek.textContent = 'Displays: even week';
    }
});
