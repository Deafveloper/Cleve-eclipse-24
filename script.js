document.addEventListener('DOMContentLoaded', () => {
  const moon = document.querySelector('.moon');
  const blackSkyline = document.getElementById('blackcleve');


  const startAnimations = () => {
    
    moon.style.left = '50%';

   
    setTimeout(() => {
      blackSkyline.style.opacity = '0';
    }, 30000); 
   
    setTimeout(() => {
      document.body.style.backgroundColor = 'black';

      
      blackSkyline.src = 'clevelandwhiteskyline600.png'; 
      blackSkyline.alt = 'Cleveland White Skyline';
      blackSkyline.style.opacity = '1';
    }, 31000); 
  };


  setTimeout(startAnimations, 100);
});

