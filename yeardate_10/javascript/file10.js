
let addDate = parseInt(
    prompt("Hi! Please, enter a date dd.mm.yyyy."),
);

    // addDate = addDate.split(".");

let NextDate = new Date (addDate[2], addDate[1] - 1, addDate[0] );
    NextDate.setDate(NextDate.getDate()+1);
    console.log (NextDate);


    // let date = prompt('Enter the date - day.month.year ');
    // date = date.split('.');
    // let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
    // oldDate.setDate(oldDate.getDate()+1);
    // alert(oldDate);