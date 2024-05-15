// Declare a variable in global scope
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable and assign it to 'not bob'
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  window.bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer()
 {
   
    leastFavoriteCustomer = 'new least favorite'; // This will throw an error
  
};

