
function openForm() {
  document.getElementById('contactForm').style.display = "block";
}

function closeForm() {
  document.getElementById('contactForm').style.display = "none";
}


function validateForm() {
  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var pN = document.forms["contact"]["pN"].value;
  let indOfAt = email.indexOf("@");
  let indexOfDot = email.lastIndexOf(".");

  if (name == "" || name == null) {
    document.getElementById("nameVal").innerHTML = "Name cannot be empty";
    return false;
  }
  if (indOfAt < 1 || indexOfDot < indOfAt + 2 || indexOfDot + 2 >= x.length) {
    document.getElementById("emailVal").innerHTML = "Enter a valid email address";
    return false;
  }
  if (isNaN(pN) || pN.length != 9 || pN[0] != 0 || pN == "") {

    document.getElementById("pNVal").innerHTML = "Enter a valid Phone Number";
    return false;
  }

}
document.getElementById("submit").onclick = function () {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const pN = document.getElementById('pN');

  const n = name.value;
  const e = email.value;
  const p = pN.value;
  const output = n + " " + " " + e + " " + p;
  if (n && e && p) {
    alert(output);
  }


}