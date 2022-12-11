const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll("#calculator .button");
const removeBtn = document.querySelectorAll("remove");

function addNumber(num) {
    resultDiv.innerHTML += num;
}

function addOperator(op) {
    resultDiv.innerHTML += op;
}

function calculate() {
    let result = eval(resultDiv.innerHTML);
    resultDiv.innerHTML = result;
}

function reset(){
    resultDiv.innerHTML = "";
}
function deleteLast(){
    resultDiv.innerHTML = resultDiv.textContent.slice(0, -1);
}

for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            let value = buttons[i].innerHTML;
                if (value >= "0" && value <= "9") {
                  addNumber(value);
            } else if (value === "+" || value === "-" || value === "*" || value === "/" || value === ".") {
                  addOperator(value);
            } else if (value === "=") {
                  calculate();
            }else if(value === "C"){
                   reset();
            }else if (removeBtn){
                   deleteLast();
            }
    });
}