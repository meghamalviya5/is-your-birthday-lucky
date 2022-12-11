const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputMessage = document.querySelector("#output-message");
var message = "";


function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const luckyNumberValue = luckyNumber.value;
  var flag = validateDOBAndLuckyNumber(dob, luckyNumberValue)
  if (!flag) {
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumberValue);
  }
  showMessage(message);
}

function validateDOBAndLuckyNumber(dob, luckyNumber) {
  if (luckyNumber === "" && dob === "") {
    message = "Date of Birth and Lucky Number cannot be empty!"
  }
  else if (dob === "") {
    message = "Date of Birth cannot be empty!";
  }
  else if (luckyNumber === "") {
    message = "Lucky Number cannot be empty!";
  }
  else if (luckyNumber <= 0) {
    message = "Lucky Number should not be negative or zero! Please enter a value greater than zero."
  }
  else {
    return false;
  }
  return true;
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum += Number(dob.charAt(index));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  result = (sum % luckyNumber);
  if (result === 0) {
    message = "Your Birthday is lucky🎇";
  } else {
    message = "Your Birthday is not lucky😑";
  }
}

function showMessage(messageParam) {
  console.log(messageParam)
  outputMessage.innerText = messageParam;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
