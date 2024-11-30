// Array of image paths based on your filenames
let images = [
  'gnome_house1.png',
  'gnome_house2.png',
  'gnome_house3.png',
  'gnome_house4.png',
  'gnome_house5.png',
  'gnome_house6.png',
  'gnome_house7.png',
  'gnome_house8.png',
  'gnome_house9.png',
  'gnome_house10.png',
  'gnome_house11.png',
  'gnome_house12.png',
  'gnome_house13.png',
  'gnome_house14.png'
];

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
