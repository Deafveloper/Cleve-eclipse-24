const title = document.getElementById("title");
const moon = document.getElementById("moon");
const container = document.body;

title.addEventListener("click", startEclipse);

function startEclipse() {
  container.classList.add("eclipse"); // Turn background black
  moon.style.left = "calc(100% - 200px)"; // Move moon to the right
  setTimeout(showWhiteSkyline, 3000); // Wait 3 seconds before next step
  title.removeEventListener("click", startEclipse); // Disable click after start
}

function showWhiteSkyline() {
  document.getElementById("skyline").src = "white_skyline.png"; // Change image
  moon.style.left = "-200px"; // Move moon to the left (hidden)
  setTimeout(resetEclipse, 180000); // Wait 3 minutes before reset
}

function resetEclipse() {
  container.classList.remove("eclipse"); // Turn background white
  document.getElementById("skyline").src = "black_skyline.png"; // Change image back
  title.addEventListener("click", startEclipse); // Enable click again
}
