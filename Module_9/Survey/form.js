function checkForm() {
  var allFields = [
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
  
  if (document.getElementById("addressInput").value === "") {
    document.getElementById("addressInput").style.backgroundColor = "#FFC0CB";
  }
  if (document.getElementById("addressInput2").value === "") {
    document.getElementById("addressInput2").style.backgroundColor = "#FFC0CB";
  }
  if (document.getElementById("coffeePlace").value === "") {
    document.getElementById("coffeePlace").style.backgroundColor = "#FFFF00";
  }
  if (document.getElementById("lunchSpot").value === "") {
    document.getElementById("lunchSpot").style.backgroundColor = "#FFFF00";
  }
  if (document.getElementById("vacationName").value === "") {
    document.getElementById("vacationName").style.backgroundColor = "#FFFF00";
  }
  for (var i = 0; i < allFields.length; i++) {
    if (allFields[i].value.length === 0) {
      alert("Please fill out all fields");
      return false;
    }
  }
  
  return true;
}

function checkFieldColor(id) {
  const input = document.getElementById(id);
  input.style.backgroundColor = "";
}