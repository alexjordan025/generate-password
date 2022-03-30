

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()_"

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var char
  var createpassword
  prompt()
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Adding prompts to ask user the complexity of password
function generatePassword() {
  var creatingPassword = ""
  var chosenChars = ""


//ask the user now many chars (passLength)
  var passLength = prompt(
    "Choose a length of at least 8 characters and no more than 130 characters."
  )

  if (passLength >= 8 && passLength <= 126) {
    
  } else {
    return window.alert("Password must be 8 through 126 characters long!"),
    console.log("Generate Password Again!")
  }