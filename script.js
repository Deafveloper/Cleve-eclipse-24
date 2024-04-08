const sun = document.querySelector('.sun');
const eclipse = document.querySelector('.eclipse');

sun.addEventListener('click', () => {
  eclipse.style.opacity = 1;
  setTimeout(() => {
    eclipse.style.opacity = 0;
  }, 1000); // Adjust time for blackout duration
});
