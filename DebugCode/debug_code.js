    
    function performOperation(operator) {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        console.log("num1: ", num1, "num2: ", num2, "operator: ", operator);

        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result = operations(num1, num2, operator);
    
                        // Display the result
                        displayResult(result);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
    
                function operations(a, b,operator) {
                    // Introduce a debugger statement to pause execution
                    debugger;
                    switch (operator){
                        case "+":
                            return a + b;
                        case "-":
                            return a - b;
                        case "*":
                            return a * b;
                        case "/":
                            return a / b;
                        default:
                            return 'invalid'
                    }
                }
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }
            