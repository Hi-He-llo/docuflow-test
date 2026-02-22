function login() {
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if (username === "" || password === "") {
displayMessage("All fields are required", "blue");
return;
}

if (password.length < 6) {
displayMessage("Password must be at least 6 characters", "red");
return;
}

let userData = {
username: username,
password: password
};

sendLoginRequest(userData);
}

function sendLoginRequest(data) {
fetch("http://localhost:3000/api/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
if (result.success) {
displayMessage("Login Successful", "green");
} else {
displayMessage("Invalid Credentials", "red");
}
})
.catch(error => {
displayMessage("Server error", "red");
});
}

function displayMessage(text, color) {
let msg = document.getElementById("message");
msg.innerText = text;
msg.style.color = color;
}
