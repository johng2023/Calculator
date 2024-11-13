
        let currentInput = '';
        let previousInput = '';
        let operation = '';

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function clearResult() {
            currentInput = '';
            previousInput = '';
            operation = '';
            updateDisplay();
        }

        function calculate(op) {
            if (op === '=') {
                if (previousInput && currentInput) {
                    currentInput = performCalculation(previousInput, currentInput, operation);
                    operation = '';
                    previousInput = '';
                }
            } else {
                if (currentInput) {
                    if (previousInput) {
                        currentInput = performCalculation(previousInput, currentInput, operation);
                    }
                    operation = op;
                    previousInput = currentInput + ' ' + operation + ' ';
                    currentInput = '';
                }
            }
            updateDisplay();
        }

        function performCalculation(num1, num2, op) {
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            switch (op) {
                case '+': return n1 + n2;
                case '-': return n1 - n2;
                case '*': return n1 * n2;
                case '/': return n2 !== 0 ? n1 / n2 : 'Error';
                default: return num2;
            }
        }

        function updateDisplay() {
            document.getElementById('result').innerText = previousInput + currentInput || '0';
        }