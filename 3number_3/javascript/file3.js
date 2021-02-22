
const threeDigitNumber = parseInt(
    prompt("Enter the three digit number"),
);
    let number = threeDigitNumber + " ";
    
    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
{
    console.log("numbers are repeated");
} else {
    console.log("numbers are not repeated");
}

