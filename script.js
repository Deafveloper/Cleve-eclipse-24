document.addEventListener('DOMContentLoaded', () => {
  const moon = document.querySelector('.moon');
  const blackSkyline = document.getElementById('blackcleve');

  // Function to start animations
  const startAnimations = () => {
    // Slide the moon in from the left
    moon.style.left = '50%';

    // After the moon animation completes, fade out the black skyline
    setTimeout(() => {
      blackSkyline.style.opacity = '0';
    }, 30000); // 30 seconds (matching moon animation duration)

    // After both animations complete, change the background color to black
    setTimeout(() => {
      document.body.style.backgroundColor = 'black';

      // Replace the black skyline with a new image
      blackSkyline.src = 'clevelandwhiteskyline600.png'; // Update with the path to your new image
      blackSkyline.alt = 'Cleveland White Skyline'; // Update alt text for accessibility
      blackSkyline.style.opacity = '1'; // Make the new image visible
    }, 31000); // 30 seconds + 1 second (to ensure complete fade out before background change)
  };

  // Call startAnimations function after a short delay to ensure CSS transitions apply
  setTimeout(startAnimations, 100);
});

