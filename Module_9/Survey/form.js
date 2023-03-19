
function checkField() {
    if (document.getElementById("addressInput").value === "") {
        document.getElementById("addressInput").style.backgroundColor = "#FFC0CB";
       } else {
        (document.getElementById("addressInput")).style.backgroundColor = "transparent";
       } 
}

function stateField() {
  
}

function checkForm() {
    var allFields =[ 
        document.getElementById("fName"),
        document.getElementById("lName"),
        document.getElementById("addressInput"),
        document.getElementById("cityName"),
        document.getElementById("stateName"),
        document.getElementById("zip"),
        document.getElementById("coffeePlace"),
        document.getElementById("lunchSpot"),
        document.getElementById("vacationName")
    ];
    for (var i = 0; i < allFields.length; i++) {
        if (allFields[i].value.length === 0) {
          alert("Please fill out all fields");
          return false;
        }
    }

      return true;
    }
