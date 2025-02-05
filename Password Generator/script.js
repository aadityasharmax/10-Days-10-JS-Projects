const password = document.getElementById("password");
const length = 8;
const generate = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.fa-copy');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=-";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    pass += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > pass.length){
        pass+= allChars[Math.floor(Math.random() * allChars.length)];;
    }


    password.value = pass;


}


generate.addEventListener("click" , function(e){
    createPassword();
})

copyBtn.addEventListener("click" , function(e){
    copy();
})


// Clipboad Api 
// Built in Api 
// No need to Install
// use with navigator.clipboard.writeText() -- for copying text from input field


function copy() {
    navigator.clipboard.writeText(password.value)
      .then(() => alert("Copied: " + password.value))
      .catch((err) => console.error("Copy failed:", err));
  }
  




