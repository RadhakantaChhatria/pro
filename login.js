
    
  document.querySelector("form").addEventListener("submit",login);

  var regdUsers = JSON.parse(localStorage.getItem("SignupD"));
  console.log(regdUsers)

function login(event) {
event.preventDefault();

var email = document.querySelector("#email").value;
var pass = document.querySelector("#pass").value;

for (var i = 0; i < regdUsers.length; i++) {
  console.log(regdUsers[i].email, regdUsers[i].pass);

  if (regdUsers[i].email == email && regdUsers[i].pass == pass) {
      alert("Login Successfull")
    window.location.href = "admin.html";
    return;
  }
}

alert("invalid Details")
}
