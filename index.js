const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputMessage = document.querySelector("#output-message");

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const luckyNumberValue = luckyNumber.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumberValue);
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
  console.log(sum, luckyNumber);
  if (sum % luckyNumber === 0) {
    outputMessage.innerText = "Your Birthday is lucky🎇";
  } else {
    outputMessage.innerText = "Your Birthday is not lucky😑";
  }
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
