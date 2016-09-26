var num1 = prompt("Enter 1st number");

var op1 = prompt("Enter operator");

var num2 = prompt("Enter 2nd number");

var int1 = parseFloat(num1);

var int2 = parseFloat(num2);

if (op1 == "+") {

    var sum = int1 + int2;
    
    document.write(sum)
}

else if (op1 == "-") {

    var minus = int1 - int2;
    
    document.write(minus)
}

else if (op1 == "*") {

    var product = int1 * int2;
    
    document.write(product)
}

else if (op1 == "/") {

    var divide = int1 / int2;
    
    document.write(divide)
}