//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function FavFoods(favoriteFoodArr){
    
    for (food in favoriteFoodArr){
        if(food != "shakes"){
            console.log(`${food}: ${favoriteFoodArr[food]}`);
        }
        else if(food === "shakes"){
            for (shake in favoriteFoodArr[food][0]){
                console.log(`${shake}: ${favoriteFoodArr[food][0][shake]}`);
            }  
        }
    }
}
FavFoods(console.log(`${person3[key]}`))


FavFoods(person3)
  

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person (name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => console.log(`${name} is ${age}.`);
}

let person1 = new Person("Tim", 50);
person1.printInfo();

let addAge = addValue => person1.age += addValue;

let firstPerson = new Person("Tim", addAge(60));
firstPerson.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let longWord = (string) => {
    return new Promise((resolve, reject) =>{
        if (string.length >10) {
            resolve(string);
        }else{
            reject(string);
        }
    })
}

string1 = "Mississippi"

longWord(string1).then((result)=>{
    console.log(`Big Word`)
}).catch((result) => {
    console.log(`Small number`)
})

//code wars #1
// Find the smallest integer in the array


let minNum = arr => console.log(Math.min(...arr))
// ('...') use spread syntax to copy arr

minNum([2,30,12,1])


// Code wars #2
/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash (words) {
    return words.join(' ');
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']))
