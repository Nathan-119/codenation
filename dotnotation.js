console.log("hello".length);
/*console.log("we are codenation".toUpperCase())
//This is to output we are codenation in uppercase
console.log(Math.floor(Math.random()*10))
*/
string = "So this is an attempt at testing this function"
console.log(string.search("is"));
//Search gives the location of the first match within a string

console.log(string.lastIndexOf("is"))
//Returns the location of the last occurance of the term in the string

console.log(string.slice(3, 21))
//Returns the contents of the string between the two values in a new string

console.log(string.substring(3, 21))
//Returns the contents of the string in a a temporary string

console.log(string.substr(3, 21))
//The first number decides where to begin returning the string from, the second number decides the length of the returned string

console.log(string.replace("testing this function", "crashing this plane"))
//The first string decides what is being replaced, the second string denotes what the first string is being replaced with

console.log(string.concat(string))
//Appends a new string to the defined original

console.log(string.charAt(20))

