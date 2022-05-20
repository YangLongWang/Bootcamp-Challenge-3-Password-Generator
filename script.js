// Assignment code here

// var specialCharacters = ;
// var lowerCase = ;
// var upperCase = ;
// var number = ;

var characterTypeNum = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //debugger
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  window.alert("Welcome to use the password generator! Please choose the criteria from the following:");
  length();
}

// password length
var length = function() {
  var passLength = window.prompt("Please choose the password's length at least 8 to 128 charicters.");
  if (passLength >= 8 && passLength <=128) {
    window.alert("Next, the following are the components of a password character type.");
    // console.log(passLength);
    characterType();
  } else { 
    window.alert("The password length should be between 8 and 128. Plase try again.");
    length();
  }
}

var characterType = function() {
  var lowerEl = window.confirm("Does your password require lowercase letters?");
  var upperEl = window.confirm("Does your password require uppercase letters?");
  var numberEl = window.confirm("Does your password require numbers?");
  var specialEl = window.confirm("Does your password require special characters");

  characterTypeNum[0] = lowerEl;
  characterTypeNum[1] = upperEl;
  characterTypeNum[2] = numberEl;     
  characterTypeNum[3] = specialEl;

  console.log(characterTypeNum);
  // check types at least one
  // var checktype = false;
  // for (i=0; i<characterTypeNum.length; i++) {
  //   if (characterTypeNum[i] == true) {
  //     checktype = true;
  //     break;
  //   }
  // }

  var checktype = characterTypeNum.some(myFunction => myFunction == true);
  // console.log(checktype);
  if (checktype != true) {
    window.alert("You have to choose at least ONE type");
    characterType();
  } else {
    combinePassword();
  }
}

var combinePassword = function() {
  var combineText = window.alert('Password: ' + length + lowerEl);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// passLength

// lowerEl
// upperEl
// numberEl
// specialEl
