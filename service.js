const users = [
{ username: "admin", password: "admin123" },
{ username: "test", password: "test1234" }
];

function validateUser(username, password) {
for (let i = 0; i < users.length; i++) {
if (users[i].username === username && users[i].password === password) {
return true;
}
}
return false;
}

function loginController(req, res) {
const { username, password } = req.body;

if (!username || !password) {
return res.json({
success: false,
message: "Missing fields"
});
}

if (validateUser(username, password)) {
return res.json({
success: true,
message: "Login successful"
});
} else {
return res.json({
success: false,
message: "Invalid credentials"
});
}
}

module.exports = {
loginController,
validateUser
};
