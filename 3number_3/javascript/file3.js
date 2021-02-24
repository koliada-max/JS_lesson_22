
const threeDigitNumber = 
    prompt("Enter the three digit number"),
);
    // let number = threeDigitNumber + " ";
    
    if (threeDigitNumber[0] == threeDigitNumber[1] || threeDigitNumber[0] == threeDigitNumber[2] || threeDigitNumber[1] == threeDigitNumber[2])
{
    console.log("numbers are repeated");
} else {
    console.log("numbers are not repeated");
}

