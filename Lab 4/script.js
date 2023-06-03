var reserveTableButton = document.getElementById("reserveTableButton");
reserveTableButton.addEventListener("click", function () {
  $('#reservationModal').modal('toggle');
});

var loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  $('#loginModal').modal('toggle');
});