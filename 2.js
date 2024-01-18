// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// four Arrays for character types
//needs generating function code to work...circle back
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specials = "!@#$%^&*-+".split("");

// Function to generate password with questions requarding user input for what characcters they want to use.
function generatePassword() {
  var finalPass = [];

  // ask user for password length
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

  // password length 8-128 characters
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }
  //ask about characters, upper.lower, specials, and numbers
  var isLowercase = confirm("Do you want lowercase letters?");
  var isUppercase = confirm("Do you want uppercase letters?");
  var isNumber = confirm("Do you want numbers?");
  var isSpecials = confirm("Do you want specials?");

  if (!isLowercase && !isUppercase && !isNumber && !isSpecials) {
    alert("Please select at least one character type.");
    return "";
  }

  // for loop. ensured chosen items were selected
  for (var i = 0; i < passwordLength; i++) {
    if (isLowercase && finalPass.length < passwordLength) {
      var randomCharacter = Math.floor(Math.random() * 26);
      finalPass.push(lowercase[randomCharacter]);
    }

    if (isUppercase && finalPass.length < passwordLength) {
      var randomCharacter = Math.floor(Math.random() * 26);
      finalPass.push(uppercase[randomCharacter]);
    }

    if (isNumber && finalPass.length < passwordLength) {
      var randomCharacter = Math.floor(Math.random() * 10);
      finalPass.push(numbers[randomCharacter]);
    }

    if (isSpecials && finalPass.length < passwordLength) {
      var randomCharacter = Math.floor(Math.random() * specials.length);
      finalPass.push(specials[randomCharacter]);
    }
  }

  // Shuffle the final password array
  finalPass = finalPass.sort(() => Math.random() - 0.5);

  // Join the array into a string and return
  return finalPass.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);