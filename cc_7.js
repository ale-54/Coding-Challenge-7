//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let invoice = (subtotal + (subtotal * taxRate)) - discount; //formula to find the invoice
    return `Total Invoice: $${invoice}`; //displaying the total
}; 

console.log(calculateInvoice(100, 0.08, 5)); //"Total Invoice: $103"
console.log(calculateInvoice(500, 0.1, 20));//"Total Invoice: $530"

//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary/(hoursPerWeek * 52); //formula to find hourly wage
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; //displaying the wage
};

console.log(calculateHourlyWage(52000, 40)); //"Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); //"Hourly Wage: $41.21"