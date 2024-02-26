// JS code for Header and footer added dynamically
$(function () {
  $('#header').load('includes/header.html');
  $('#footer').load('includes/footer.html');
});


// JS code for Header and footer added All Pages dynamically
$(function () {
$('#header').load('../includes/header.html');
$('#footer').load('../includes/footer.html');
});

// login Validation code
function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "admin@admin.com" && password === "123456") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

