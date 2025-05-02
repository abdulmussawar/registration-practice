// script.js

// Utility to get users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

// Utility to save users to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Utility to set current logged-in user
function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// Utility to get current user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// Logout functionality
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Register logic
function handleRegister(event) {
  event.preventDefault();
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = getUsers();

  if (users.some(u => u.email === email)) {
    alert("Email already exists!");
    return;
  }

  users.push({ fullname, email, password });
  saveUsers(users);

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}

// Login logic
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password!");
    return;
  }

  setCurrentUser(user);
  window.location.href = "home.html";
}

// Display user name on home page
function displayUser() {
  const user = getCurrentUser();
  if (!user) {
    alert("You must be logged in to view this page.");
    window.location.href = "login.html";
  } else {
    document.getElementById("userFullName").innerText = user.fullname;
  }
}
 // Load saved data on page load
 window.onload = function() {
  document.getElementById("show1").textContent = localStorage.getItem("data1") || "";
  document.getElementById("show2").textContent = localStorage.getItem("data2") || "";
}

function saveInputs() {
  const val1 = document.getElementById("input1").value;
  const val2 = document.getElementById("input2").value;

  localStorage.setItem("data1", val1);
  localStorage.setItem("data2", val2);

  document.getElementById("show1").textContent = val1;
  document.getElementById("show2").textContent = val2;
}
  