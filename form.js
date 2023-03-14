
function checkField() {
    if (document.getElementById("addressInput").value === "") {
        document.getElementById("addressInput").style.backgroundColor = "#FFC0CB";
       } else {
        (document.getElementById("addressInput")).style.backgroundColor = "transparent";
       } 
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
        if (allFields[i].length === 0) {
          return false;
        }
      }
      return true;
    }

    function validateForm() {
        if (checkForm() === false) {
            alert("Please fill in all fields!")
        } 
      } 
