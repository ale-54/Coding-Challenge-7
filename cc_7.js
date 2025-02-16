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

//Task 4: Parameters and Arguments
const calculateShippingCost = (weight, location, expedited = false) => {
    let shipping = 0;
    if (location === `USA`) {
        shipping = 5 + (.5 * weight); //$5 + 0.5/lbs for shipping cost from USA
    } if (location === `Canada`) {
        shipping = 10 + (.7 * weight); //$10 + 0.7/lbs for shipping cost from CAN
    };
    if (expedited) shipping +=10; //additional $10 fee for shipping

    return `Shipping Cost: $${shipping.toFixed(2)}`;
};

console.log(calculateShippingCost(10, "USA", true)); //Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); //"Shipping Cost: $13.50"

//Task 5: Returning Values
function calculateLoanInterest(principal, rate, years) {
    let loanInterest = principal * rate * years; //formula to find the interest
    return `Total Interest: $${loanInterest.toFixed(2)}`; //displaying total interest
}; 

console.log(calculateLoanInterest(1000, 0.05, 3)); //"Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); //"Total Interest: $1750.00"