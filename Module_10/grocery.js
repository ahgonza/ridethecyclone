function saveForm(event) {
    event.preventDefault(); 
    var allQueries = [
        document.getElementById("fName"),
        document.getElementById("lName"),
        document.getElementById("addressInput"),
        document.getElementById("cityName"),
        document.getElementById("stateName"),
        document.getElementById("zip"),
        document.getElementById("username"),
        document.getElementById("password"),];

    for (let i = 0; i < allQueries.length; i++) {
        if (allQueries[i].value.length === 0) {
            alert("Please fill in all required fields.");
            return false;
        }
    }
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    event.target.submit();
    window.open("logIn.html");
}


function logIn() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    if (document.getElementById("userLogIn").value !== username && document.getElementById("userPassIn").value !== password) {
        alert("That username and password combination does not exist.");
        return false; 
    } else {
        window.open("grocery.html");
        return true;
    }
}

