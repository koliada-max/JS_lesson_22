
const year = parseInt(
    prompt("Enter any year"),
);
    if (year % 4 == 0  || year % 400 == 0 || year % 100 !== 0)
    {
        console.log("Leap year");
    } else {
        console.log("Not Leap Year");
    }

    
