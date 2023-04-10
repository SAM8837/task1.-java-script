const zakatPercentage = 0.025; 
const userInput = prompt("please enter the amount of which you want to calculate zakat:");
const parsedInput = Number(userInput);
if (isNaN(parsedInput)) {
    alert("Invalid Input...Please enter a valid number.");
} else {
    const result = parsedInput * zakatPercentage;
    alert("your zakat value is ${result}");
}
