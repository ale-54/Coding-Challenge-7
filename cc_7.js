//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let invoice = (subtotal + (subtotal * taxRate)) - discount; //formula to find the invoice
    return `Total Invoice: $${invoice.toFixed(2)}`; //displaying the total
}; 

console.log(calculateInvoice(100, 0.08, 5)); //"Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20));//"Total Invoice: $530.00"

//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary/(hoursPerWeek * 52); //formula to find hourly wage
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; //displaying the wage
};

console.log(calculateHourlyWage(52000, 40)); //"Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); //"Hourly Wage: $41.21"

//Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    let discount;
    if (years >= 5) {
        discount = amount * .15; //15% discount
    } else if (years >= 3) {
        discount = amount * .1; //10% discount
    } else if (years < 3) {
        discount = amount * .05; //5% discount
    };
    const finalPrice = amount - discount; //formula to find the price
    return `Discounted Price: $${finalPrice.toFixed(2)}`;
};

console.log(calculateLoyaltyDiscount(100, 6)); //"Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); //"Discounted Price: $190.00"