var num1, num2, total = 0, operator = "";

num1 = parseInt(prompt("Enter First Number:"));

    while ( isNaN(num1))
    {
        alert("Please input number only!");
        num1 = parseInt(prompt("Enter First Number:"));
    } 
    
    console.log(num1); 

var operators = new Array("+", "-", "*", "/");

operator = prompt("Enter Operator(+,-,*,/):");

while (!operators.includes(operator)) {
    // found element
    alert("invalid Operator");
    operator = prompt("Enter Operator(+,-,*,/):");
}
console.log(operator);

num2 = parseInt(prompt("Enter Second Number:"));

    while ( isNaN(num2))
    {
        alert("please input numbers only!");
        num2 = parseInt(prompt("Enter Second Number:"));
    } 
    
    console.log(num2); 

if(operator == "+"){
    total = parseInt(num1) + parseInt(num2);
}else if(operator == "*"){
    total = num1 * num2;
}else if(operator == "/"){
    total = num1 / num2;
}else if(operator == "-"){
    total = num1 - num2;
}else{
    alert("invalid Operator")
}


alert("Total: " + total);