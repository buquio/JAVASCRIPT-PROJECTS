
xxx
// Challenge - Manage Inventory

/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.
    5. log out the current list of products.
    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/
// 1.
const products = ["toilet paper", "bottled water", "sanitizer"];
// 2.
products[0] = "paper towels";
// 3.
products.pop();
// 4.
products.push("bleach");
// 5.
console.log(products)//all the product aftr changes

// practising
var product = products.filter(product => product.startsWith('b'))
// var product = products.filter(product => product.includes('paper'))
// var product = products.filter(product => product.length)
// var product = products.filter(product => product.toUpperCase)

console.log(product) //all the product aftr filter


xxx
/* Challenge - User Profile Form
    1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
    2. Store a user's first and last name.
    3. Store a user's address,City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    5. Are they a gold member? Store a boolean with this value.
*/
// 1.
const user = {
    firstName: 'Dylan',
    lastName: 'Israel'
};
// 2.
user['address'] = {
    city: 'Tampa',
    state: 'Florida'
};
// 3.
user.hobbies = ['Anime', 'Coding', 'Dating', 'Gaming'];
user.isGoldMember = true;

console.log(user);

xxx
// Challenge: Checkout Order Details

/*
 1. Create 3 variables to store an item price. The last price items were ordered 2x (multiplication).
 2. Tell the user what the total price is before discount.
 3. Inform the user what the average price of items is before discount.
 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
*/

const price1 = 5;
const price2 = 3;
const price3 = 7;

const totalPrice = price1 + price2 + (price3 * 2);

const averagePrice = totalPrice / 4;

const finalPrice = totalPrice - 5;

console.log(totalPrice, averagePrice, finalPrice);


xxx
// Challenge: Upsell Quantity

/*
 1. Our business wants to upsell items in a user's cart. 
 2. Ask the user if they would like to add any one more item(with the variable provided)Update the quantity variable if they do.
 3. Log the current quantity.
*/
const customerAnswer = Math.random() >= 0.5;
let quantity = 2;

if(customerAnswer) {
    quantity++; // quantity + 1;
}

console.log(quantity)

xxx
// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/

const age = 32;

if(age <= 12) {
    console.log('child');
} else if(age < 20) {
    console.log('teenager');
} else {
    console.log('adult');
}

// Challenge 2: Practice and or Operators
//    1. Look at the examples below and see if you can guess the anwser

// console.log(10 === 10 && 5 < 4);// false
// console.log(10 === 10 || 5 < 4);// true
console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);// true


xxx
let studentAnswer = 'D';

switch(studentAnswer) {
    case 'A': 
        console.log('A is wrong.');
        break;
    case 'B' :
        console.log('B is wrong.');
        break;
    case 'C':
        console.log('C is correct.');
        break;
    default: 
        console.log('Not a real answer.');
}


xxx
// Challenge: Customer Upgrade
/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

const userType = null;

switch (userType) {
    case 'shopper' :
    console.log('Do you want to Upgrade to super shopper?');
    break;
    
    case 'super shopper':
    console.log('You are the best!');
    break;
    
    default: 
    console.log('Would you like to upgrade to a shopper?');
    break;
}

xxx///////
let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
    total += numArray[i];
}

console.log(total);



xxx
// Challenge: Analytics

/*
 1. Track our user's activity.
 2. While the total updates is under 10 updates keep logging the update count.
 3. After we reach our threshold say, 'No longer tracking the user'.
 4. Change the logic to a do/while with it updating just a single time. 
*/

let totalUpdates = 10;

while(totalUpdates < 10) {
    totalUpdates++;
    
    console.log(totalUpdates);
}

console.log('No longer tracking the user.');

//or
let totalUpdates = 10;

do {
    totalUpdates++;
    
    console.log(totalUpdates);
}
while(totalUpdates < 10);

console.log('No longer tracking the user.');

xxx
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(10, 6));
console.log(add(15, 7));
console.log(add(20,2));


// Challenge: Checkout

/*
 1. Use getUserCredentials that returns the first name, last name and concats with email.  
 2. Write a function called getPreTaxTotal that take in our cartItems and returns the total without tax.
 2b. Pass the preTaxTotal value to a getTaxedTotal function that returns the value with tax.
 2c. Log each value from the  functions out. 
*/
1//
function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`
}
const userCredentials = getUserCredentials('Dylan', 'Israel', 'DylansEmail310@gmail.com');

console.log(userCredentials)

2//
function getPreTaxTotal(cartItems) {
    let total = 0;
    
    for(let cartItem of cartItems) { // cartItems.forEach(cartItem=>{ 
        total += cartItem.quantity * cartItem.price;
    }
    
    return total;
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

const preTaxTotal = getPreTaxTotal(cartItems);

function getTaxedTotal(preTaxTotal) {
    return preTaxTotal *= 1.08;
}
//2b
const TaxedTotal = getTaxedTotal(preTaxTotal);
//2c
console.log(preTaxTotal);
console.log(TaxedTotal);
