//Laboratory Quiz DSA
//#1
var password = "Enchantressxcutie"; // this line of code will predefine the password, that will be needed later on 

let user_name = prompt("Enter your username:"); // this line of code contains a varible named user_name that will store the users name
let user_password = prompt("Enter your password:"); // this line of code contains a variable named user_password that will store the users pass

if (user_password === password) { // this line of code will compare teh password and the user_password
    alert(`Welcome ${user_name}`); // if the condition is satisfied it will display Welcome Invoker
} else {
    alert("Maybe Username or Password is Invalid or does not match"); // if the condition above is not satisfied it will display the string in this line of code
}

//#2
let dog_breed = prompt("Please enter the dog breed:");
let print_count = parseInt(prompt("Please enter how many times to print:"));

for (let i = 0; i < print_count; i++){
    console.log(dog_breed);
}

//#3
// the line of codes below will display all the list, with their characters also with teheir corresponding prices 
console.log("Item list, price:");
console.log("A. Pepsi Cola - Php 30.00");
console.log("B. Coca Cola - Php 35.00");
console.log("C. Apple (per kg) - Php 100.00");
console.log("D. Orange (per kg) - Php 120.00");
console.log("E. Hotdogs (per kg) - Php 180.00");


let item_Choice = prompt("Enter the letter of your chosen item between A to E:").toUpperCase(); // this line of code will show a dialog box, that will ask the user for their choice
let qty = parseInt(prompt("Enter the quantity:")); // thsi line of code on the otehr hand will ask for the quantity, it also contains parseInt so that it will convert any value into an int 

let price = 0; // the price will be stored in this var, and the partial val is 0
let itemName = ""; // this is a empty var, that will be filled later on 

switch (item_Choice) { // I'll use switch statements to determine the price based on the users choice
    case 'A':
        itemName = "Pepsi Cola";
        price = 30;
        break;
    case 'B':
        itemName = "Coca Cola";
        price = 35;
        break;
    case 'C':
        itemName = "Apple (per kg)";
        price = 100;
        break;
    case 'D':
        itemName = "Orange (per kg)";
        price = 120;
        break;
    case 'E':
        itemName = "Hotdogs (per kg)";
        price = 180;
        break;
    default:
        alert("Invalid choice! Please enter A, B, C, D, or E."); // this line of code will be displayed if all of the conditions above are not satisfied 
}

// The conditional statement below will calculate and display the total price if the choice is valid
if (price > 0 && qty > 0) { //if the users input is valid it will continue with the conditional statement below 
    let total = price * qty; // this line of code will multiply the price to the quantity of the users input
    alert(`You ordered ${qty} x ${itemName}.\nTotal Price: Php ${total.toFixed(2)}`);
    console.log(`You ordered ${qty} x ${itemName}. Total Price: Php ${total.toFixed(2)}`); // an example output would be, You ordered 3 x "Pepsi Cola". Total Price; 90
} else {
    alert("Quantity not valid! Please enter a valid one."); // this will be utilized when the condition above is not met, for instance if the user inputs a non numeric or negative value.
}

/*
//references:
W3Schools.com. (n.d.-h). https://www.w3schools.com/js/js_if_else.asp
W3Schools.com. (n.d.-g). https://www.w3schools.com/js/js_loop_for.asp
W3Schools.com. (n.d.-i). https://www.w3schools.com/jsref/jsref_tofixed.asp
Learn to use JavaScript variables with this free resource. (n.d.). https://www.javascript.com/learn/variables#:~:text=var%20is%20the%20keyword%20that,you're%20declaring%20a%20variable.
Olawanle, J. (2024, November 7). What does $ mean in JavaScript? Dollar sign operator in JS. freeCodeCamp.org. https://www.freecodecamp.org/news/what-does-the-dollar-sign-mean-in-javascript/
[Module]Ch2: Windows Objects and Control Flow Structures
*/