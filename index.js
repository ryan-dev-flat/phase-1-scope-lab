// Declare a variable in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}



const leastFavoriteCustomer = 'not really Bob'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "definitely Bob";
  return leastFavoriteCustomer
}