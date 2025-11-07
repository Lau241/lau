const credentials = {
  username: "officehours@toasterlab.com",
  password: "thea3135"
};

function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === credentials.username && pass === credentials.password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}