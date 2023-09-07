function primeNumber(number) { // the function checks whether the entered number is a prime number

	if (number <= 1) { // checks whether number is less than or equal to 1
		return false;
	}

	for (let i = 2; i * i <= number; i++) {
		if (number % i === 0) { // in each iteration of the loop, it is checked whether number is divisible by i without a remainder
			return false;
		}
	}

	return true; // the function returns true, indicating that number is a prime number
}

const enteredNumber = parseInt(prompt("Enter a number:"));
const number = Number(enteredNumber);

if (isNaN(number) || number == null || number == "") {
	console.log("You entered uncorrect value. Please, try again."); // if the entered value is non-numeric

} else { // if the conversion was successful and the number was entered correctly
	if (primeNumber(number)) { // checks whether the entered number is a prime number
		console.log(`${number} — is a prime number.`);
	} else {
		console.log(`${number} — isn't a prime number.`);
	}
}