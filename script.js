

// Write all the const value first.
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector(".form-select");
const answer = document.querySelector(".answer");
const reset = document.querySelector(".reset");


// function for reset button
reset.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  answer.value = "";
  operator.value = "+";
});


num1.addEventListener('click', function(){
  answer.value = ""
})
num2.addEventListener('click', function(){
  answer.value = ""
})



// function for calculation
document.querySelector(".calculate").addEventListener("click", function () {
  const number1 = parseInt(num1.value);
  const number2 = parseInt(num2.value);
  const operatorChoosen = String(operator.value);
  
  if (isNaN(number1) || isNaN(number2)) {
    
    answer.style.color = "red"
    answer.value = "Invalid number";
  } else {
    switch (operatorChoosen) {
      case "+":
        answer.value = `${number1 + number2}`;
        break;
        case "-":
          answer.value = `${number1 - number2}`;
          break;
          case "*":
            answer.value = `${number1 * number2}`;
            break;
            case "/":
        answer.value = `${number1 / number2}`;
        break;
        case "%":
          answer.value = `${number1 % number2}`;
          break;
          case "^":
            answer.value = `${number1 ** number2}`;
            break;
          }
        }
        answer.style.color = "black"
});
