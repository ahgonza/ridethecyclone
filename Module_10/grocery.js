function saveForm() {
    localStorage.setItem("username", username);
    localStorage.setItem("password", userpass);
}


function logIn() {
    var username = localStorage.getItem('username');
    if (document.getElementById("userLogIn").value === username) {
        return true
    } else {
        alert("That username and password combination does not exist.");
        return false;
    }
}