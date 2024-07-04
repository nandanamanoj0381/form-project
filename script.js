document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  // Clear previous error messages
  clearErrors();

  // Get form values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  let isValid = true;

  // Validate Full Name
  if (fullName.length < 5) {
    document.getElementById("nameError").textContent =
      "Name must be at least 5 characters long.";
    isValid = false;
  }

  // Validate Email
  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Phone Number
  if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
    document.getElementById("phoneError").textContent =
      "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Validate Password
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password === fullName
  ) {
    document.getElementById("passwordError").textContent =
      "Password is not strong enough.";
    isValid = false;
  }

  // Validate Confirm Password
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  // If form is valid, you can proceed with form submission
  if (isValid) {
    alert("Form submitted successfully!");
    // Optionally, you can submit the form data using AJAX here
  }
}

function clearErrors() {
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
}