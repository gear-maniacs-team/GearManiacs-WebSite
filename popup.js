// JavaScript for the popup
document.addEventListener('DOMContentLoaded', function () {
  // Show the popup when the page is loaded
  showPopup();
});

function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}