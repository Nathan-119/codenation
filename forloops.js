for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
   } 
//A for loop will counts through each integer/variable in the loop
for (i = 9; i > 0; i-- ){
    console.log(i);
   }
   //We can invert it and count from top to bottom

   let favouriteChoco = [
    "Mars",
    "Snickers",
    "Dairy Milk",
    "Picnic"
   ];
   for (chocoIndex = 0; chocoIndex < favouriteChoco.length; chocoIndex++) {
    console.log(favouriteChoco[chocoIndex]);
   }
   //the chocoIndex variable counts up everytime it counts an arry, once it's equal to the arrays length, in this case 4, then it will end

   let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Diamond";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
//A while loop tells the code to cycle through options until spade appears, we define the start with the variable current card
//and set the goal with while(current card !="Spade")

let faveFilms = [
    "Fifth Element",
    "Blade Runner",
    "John Wick",
    "Shaun of the Dead",
    "Hot Fuzz",
];

faveFilms.push("Revenant");
faveFilms.push("John Wick 2");

for (filmIndex = 0; filmIndex < faveFilms.length; filmIndex++) {
    console.log(faveFilms[filmIndex]);
}

const filmCheck = () => {
    if (faveFilms[3] === "John Wick") {
      console.log("John Wick is a great film");
    } else {
        console.log(`This is isn't John Wick, this is `);
    }
}
filmCheck();

