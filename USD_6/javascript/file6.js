
const amount = parseInt(prompt("Enter the amount of USD:"));
const currency = prompt("EUR, UAH, AZN");

switch(currency) {
    case "EUR":
        console.log(amount * 0.83 + "EUR");
        break;
    case "UAH":
        console.log(amount * 27.90 + "UAH");
        break;
    case "AZN":
        console.log(amount * 1.7 + "AZN");
        break;
}

