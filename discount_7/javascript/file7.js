
const PurchaseAmount = parseInt(
    prompt("Do you want to know the amount of your discount? Ok! Enter the amount spent on purchases in $ USD"),
);

let amount = PurchaseAmount;

if (amount >=200 && amount <300)
{
    let discount = amount * 0.03
    confirm("you pay " + (amount - discount) + " $ \n you saved " + amount * 0.03 + " $ it is you discount 3 %");
    console.log("you saved " + amount * 0.03 + " $ it is you discount 3 %");
}
if (amount >=300 && amount <500)
{
    let discount = amount * 0.05
    confirm("you pay " + (amount - discount) + " $ \n you saved " + amount * 0.05 + " $ it is you discount 5 %")
    console.log("you saved " + amount * 0.05 + " $ it is you discount 5 %");
}
if (amount >=500)
{
    let discount = amount * 0.07
    confirm("you pay " + (amount - discount) + " $ \n you saved " + amount * 0.07 + " $ it is you discount 7 %")
    console.log("you saved " + amount * 0.07 + " $ it is you discount 7 %");
}


