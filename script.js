// Genre Filter
const genreSelect = document.getElementById('genreFilter');
const actionMovies = document.querySelectorAll('.movie-item-action');
const comedyMovies = document.querySelectorAll('.movie-item-comedy');
const dramaMovies = document.querySelectorAll('.movie-item-drama');
const romanceMovies = document.querySelectorAll('.movie-item-romance');
const sciFiMovies = document.querySelectorAll('.movie-item-sci-fi');

genreSelect.addEventListener('change', function () {
  const choice = genreSelect.value;

  const allMovies = document.querySelectorAll('.movie-container > div');
  allMovies.forEach(item => item.style.display = 'none');

  if (choice === 'all') {
    allMovies.forEach(item => item.style.display = 'block');
  } else {
    document.querySelectorAll(`.movie-item-${choice}`).forEach(item => item.style.display = 'block');
  }
});

// Form submission handling
document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  alert(`hank you, ${name}! You’ve successfully registered for the movie event.`);
  document.getElementById("regForm").reset();
});
