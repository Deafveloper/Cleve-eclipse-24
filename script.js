const eclipse = document.querySelector('.eclipse');
const title = document.querySelector('.eclipse-title');
const halfViewportWidth = window.innerWidth / 2; // Calculate half viewport width

title.addEventListener('click', () => {
  eclipse.style.left = `-${halfViewportWidth}px`;  /* Move eclipse to half viewport width to the left (off-screen) */
  eclipse.classList.add('move-eclipse'); /* Add a class to trigger animation */
});

eclipse.addEventListener('transitionend', () => {
  if (eclipse.classList.contains('move-eclipse')) {
    document.body.style.backgroundColor = '#222222'; /* Change background to dark */
    eclipse.classList.remove('move-eclipse'); /* Remove animation class */
  }
});

// Animation class for smooth slide effect (add to style.css)
.move-eclipse {
  animation: slide 120s ease-in-out; /* Animation duration and easing */
  animation-fill-mode: forwards; /* Keep final position after animation */
}

@keyframes slide {
  0% { left: -100%; } /* Start from completely off-screen */
  100% { left: 0; }  /* End at the left edge of the viewport */
}

