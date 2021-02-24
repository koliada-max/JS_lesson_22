
const CircleLength = parseInt(
    prompt("Please, enter the length of circle"),
);
const SquareleLength = parseInt(
    prompt("Please, enter the length of square"),
);
    
    let Scircle = 3.14 * Math.pow((CircleLength / 6.28),2);
    let Ssquare = 3.14 * Math.pow((SquareleLength / 4),2);
    
    if (Scircle < Ssquare)
{
        confirm("YEEEE!! a given circle can fit into a given square!!!");
        console.log("a given circle can fit into a given square");
} else
    {
        confirm("OOOPS!! a given circle cannot fit into a given square!!!");
        console.log("a given circle cannot fit into a given square");
    }

    
    