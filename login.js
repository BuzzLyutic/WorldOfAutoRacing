var but = document.getElementsByClassName("button")[0];
console.log(but);
but.addEventListener('click', start);
function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function compareAnswers(a,b,c){
   return Number(a) + Number(b) === Number(c) ? true : false;
  }
  var PromptValidator = {
    isEmpty: function(input) {
        if (input === null){
            return true;
        }
            var trimmedInput = input;
            return trimmedInput.length == 0;
    }
   };
  function start(){
    console.log("start");
  let captcha = generateRandomString(6);
  let userInput = prompt("Please enter the CAPTCHA: " + captcha);
  console.log(userInput);
  if (PromptValidator.isEmpty(userInput)) {
    alert("Input field is empty");
   } else {
    alert("Input field is not empty");
   }
if (userInput !== captcha) {
    alert("Incorrect! Try again.");
    do{
        let num1 = generateRandomNumber(10, 99);
        let num2 = generateRandomNumber(10, 99);
        captcha = num1 + '+' + num2;
        userInput = prompt("Please enter the CAPTCHA: " + captcha);
        if (compareAnswers(num1, num2, userInput)) {
        alert("Correct!");
        let but2 = document.getElementById("Enter");
        but2.disabled = false;
        break;
        }
        else alert("Incorrect! Try again.");
  } while (true)
} else{
    alert("Correct!");
    let but2 = document.getElementById("Enter");
        but2.disabled = false;}}

/*function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 

function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
 }

 let captcha = generateRandomString(6);
 let userInput = prompt("Please enter the CAPTCHA: " + captcha);
 
 while (userInput !== captcha) {
    alert("Incorrect! Please try again.");
    captcha = generateRandomNumber(10, 99) + '+' + generateRandomNumber(10, 99);
    userInput = prompt("Please enter the CAPTCHA: " + captcha);
 }
 
 alert("Correct!");
 
*/


/*function login(){
    while (true){
        result = prompt("Желаете пройти регистрацию на сайте?");
        if (result === "Да") {
            alert("Круто!");
            break;
        }
        else alert("Попробуйте еще раз!");
    }

    while(true){
        result = prompt("Введите ваш логин:");
        if (result === "Admin"){
            while(true){
                res2 = prompt("Введите пароль:");
                if (res2 === "Big_Papa"){
                    alert("Здравствуйте!");
                    break;
                }
                else if (!res2){
                    alert("Отменено");
                }
                else alert("Неверный пароль");
            }
            break;
        }
        else if (!result) alert("Отменено");
        else alert("Я Вас не знаю!");
    }
}

function changeColor(button) {
    var style = window.getComputedStyle(button);
    if (style.backgroundColor == "rgb(255, 255, 255)") {
        button.style.backgroundColor = "red";
        button.style.color = "white";
    }
    else {
        button.style.backgroundColor = "white";
        button.style.color = "red";
    }
}

*/