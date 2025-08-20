// all ids
const generateBtn = document.getElementById("generateBtn");
const passwordDisplay = document.getElementById("passwordDisplay");
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");

// Characters 
const letters = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  let allChars = letters + digits + specialChars;
  

  if (uppercaseCheckbox.checked) {
    allChars += letters.toUpperCase();
  }

  let password = "";
  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    // console.log(allChars.length)
    password += allChars[randomIndex];
  }

 
  if (password.length > 0) {
    passwordDisplay.textContent = password;
  } else {
    passwordDisplay.textContent = "Error: Unable to generate password!";
  }
}


generateBtn.addEventListener("click", generatePassword);
