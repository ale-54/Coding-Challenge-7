//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let invoice = (subtotal + (subtotal * taxRate)) - discount; //formula to find the invoice
    return `Total Invoice: $${invoice}`; //displaying the total
}; 

console.log(calculateInvoice(100, 0.08, 5)); //"Total Invoice: $103"
console.log(calculateInvoice(500, 0.1, 20));//"Total Invoice: $530"