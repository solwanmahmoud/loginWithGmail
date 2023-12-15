function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page
  
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var nameInput = document.getElementById("Name");

  const email = emailInput.value;
  const password = passwordInput.value;
  const Name = nameInput.value;

  if (!email || !password ||!Name) {
    alert("Please enter Name, email and password.");
    return;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email address.");
    return;
  }

  const namePattern = /^[A-Za-z\s\-']+$/;
  if (!namePattern.test(Name)) {
    alert("Invalid Name");
    return;
  }
  
  localStorage.setItem("currentEmail", email);
  localStorage.setItem("password", password);
  localStorage.setItem("currentName", Name);
  
  window.location.href = "./home.html";
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleFormSubmit);

