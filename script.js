



var animalPic = document.querySelector('.main_image');
var loginModal = document.querySelector('.login_modal');
var loginTrigger = document.querySelector('.login');

loginTrigger.addEventListener('click', function() {

  loginModal.style.display = "none";
  animalPic.style.display = "none";

  if (animalPic.style.display === "none") {
      loginModal.style.display === "block";
    }
})
