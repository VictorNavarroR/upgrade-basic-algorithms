// Iretation 1
// const myFavoriteHero = "Hulk";
// const x = 50;
// const h = 5;
// const y = 10;

// const z = h + y;

// Iretation 2
//1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

//1.2
const firstName = "Jon";
const lastName = "Snow";
const age = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

//1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

//update final price of car1 and car2
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

// Iretation 3
//1.1
alert(10*5);

//1.2
alert(10/2);

//1.3
alert(15%9);

//1.4
const y = 10;
const z = 5;
let x = y + z;

//1.5
x = y * z;

// Iretation 4

//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const getHulk = avengers[0];

console.log(getHulk);

//1.2
avengers[0] = "IRONMAN";

//1.3
avengers.length;

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

//1.5
rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();

//1.6
rickAndMortyCharacters.splice(1,1);

