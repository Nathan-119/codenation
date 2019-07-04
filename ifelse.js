if (1 === "1") {console.log(true);
} else {console.log(false);
}

if (1 != "1") {console.log(true);
} else {console.log(false);
}

let age =18
let country ="UK" 

if (age <18 && country=="UK") {console.log("You're not old enough.")
} else {console.log("Yes, I can serve you.")  
}

let password ="password";

if (password.length >7) {console.log(password);
    
} else {console.log("Password is too short");
    
}

let num =2002;

if (num % 3==0 || num % 5==0) {console.log("This number is divisible by 3 or 5");
} else {console.log ("This number is not divisible by 3 or 5");
}

if (num % 3==0 && num % 5==0) {console.log("Fizz Buzz");
} else if (num % 3==0) {console.log("Fizz")}
else if (num % 5==0) {console.log("Buzz")} else {console.log (num)
};


if (num.toString() == num.toString().split("").reverse().join("")){
    console.log("This is a Palindrome.")
}
else {
    console.log ("This is not a Palindrome.")
}


let time =6
let placeOfWork ="CodeNation"
let townOfHome ="Manchester"

if (time >17) {console.log(`I'm at ${townOfHome}`)} 
else if (time >16)  {console.log(`I'm commuting to ${townOfHome}`)}    
    else if(time >8){console.log(`I'm at ${placeOfWork}`)} 
    else if(time >7){console.log(`I'm commuting to ${placeofWork}`)}
    else {console.log(`I'm at ${townOfHome}`)};

string="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

console.log(string.lastIndexOf("a"),(string.lastIndexOf("e")))
console.log(string.lastIndexOf("i"),(string.lastIndexOf("o")))
console.log(string.lastIndexOf("u"))

let word="wordsordsordsordsordsordsordsordsordsords"
if (word.substr(-1,1) == word.substr(0,1)) {console.log(true)}
else {console.log(false)}

let num1 =11
let num2 =10
let result = ((+num1) + (+num2))
if (result %2==0) {console.log(result)}
else {console.log(num1 * num2)}
