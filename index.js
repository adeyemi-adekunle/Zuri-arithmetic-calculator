// This program is a simple arithmetric calculator
//Declaring the initial variables to be zero
 let num1 = 0
 let num2 = 0
 let result = 0

// the code below to perform  simple the arithmetric calculation

  num1 =  parseFloat(prompt("Enter the first number: "))
 const operator = prompt("Enter the Operator ( + , - , / , x ):")
  num2 =  parseFloat(prompt("Enter the second number: "))


    if (operator === "+" ) {
        result =  num1 + num2   
    }

    else if (operator === "-") {
        result =  num1 - num2
    }

    else if (operator === "/") {
        result =  num1 / num2
    }

    else if (operator === "x"){

        result =  num1 * num2
    } 
      
    
    alert("Result: " + result)


    
 