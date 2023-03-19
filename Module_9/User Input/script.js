function checkForm(event) {
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        let isUsernameValid = true;
        let isPasswordValid = true;

        if (usernameInput.value.length < 8) {
            isUsernameValid = false;
        } else {
            isUsernameValid = true;
        }

        if (passwordInput.value.length < 12) {
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }
        if (isUsernameValid === false && isPasswordValid === false) {
            alert("Username must be 8 characters and password must be 12 characters");
            return isUsernameValid && isPasswordValid;
        }
        if (isUsernameValid === false) {
            alert("Username must be at least 8 characters");
            return isUsernameValid && isPasswordValid;
        }
        if (isPasswordValid === false) {
            alert("Password must be at least 12 characters");
            return isUsernameValid && isPasswordValid;
        }
        return isUsernameValid && isPasswordValid;
    }
    


  
  