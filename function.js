/*const pressGrindBeans = () => {
    console.log("Grinding is on for 20 seconds");
}

pressGrindBeans();*/
//This is a function we are delaring the function, which is to log the string to the console to grind coffee, and then we run the function

let coffeeIsGrinding= true;
const pressGrindBeans = () => {
 if (coffeeIsGrinding) {
 console.log("Stopping the grind");
 coffeeIsGrinding = false;
 } else {
 console.log("Grinding is about to begin");
 coffeeIsGrinding = true;
 }
}
pressGrindBeans();
//We're showing if it's on or off, false is off true is on, setting the variable will activate the opposing boolean and using that
// we decide if it's on or off

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
   }
   
   cashWithdrawal(300, 50449921);
   cashWithdrawal(30, 50449921);
   cashWithdrawal(200, 50447921);


   const addUp = (num1, num2) => {
    return num1 + num2;
   }
   addUp(7,3);
   console.log(addUp(2,5)); 
   // => is the arrow function syntax and is used to create functions

   /*function square(number) {
    return number * number
   };
   
   console.log(square(5));*/ 
   //Declaration functions is a way to create functions using function[name](parameter)

   const square = function(number) {
    number * number
   };
  console.log(square(5)); 
  //This is an expression anonymous function, but the example given in the slideshow doesn't work
