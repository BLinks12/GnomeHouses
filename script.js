// Array of image paths
let images = [];
for (let i = 1; i <= 14; i++) {
  images.push(`gnome_house${i}.png`);
}

// Event listener for the button
document.getElementById('randomize-button').addEventListener('click', displayRandomImage);

// Function to display a random image
function displayRandomImage() {
  let randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById('canvas-image').src = images[randomIndex];
}
 
// Initial random image on page load
window.onload = function() {
  displayRandomImage();
};
