console.log('HIIIIIIIIIIIII')



// JS Objects

// if you see object prototype ---> kinda a reference to a class 

// simple object

let animal = {
    animalName : " bald Eagle", 
    age : 21,
    color : 'Brown',
    3 : '3'
}
console.log(animal)

// access values w/ bracket notation 
console.log(animal['age'])

// access values w/ fot notation 
console.log(animal.age)

// add key and value pairs / add to object 

animal.height = "36inches";
animal[4] = '4'

animal.height = 38.45

console.log(animal)

delete animal[4]

console.log(animal)

let animals = {
    eagles : {
        'Bald' : {
            colors : ['Brown', 'White'],
            flight : true,
            wingspan : 72
        },
        'Golden' : {
            colors : ['Brown', 'Black', 'Gold'],
            flight : true,
            wingspan : 84
        }
    }
}
console.log(animals.eagles['Bald']['colors'])
console.log(animals.eagles.Bald.colors)

// for of and for in --> looping through indexes orvalues
for ( x in animals.eagles.Bald.colors){
    console.log(x)
}

for (prop in animals.eagles){
    console.log(prop);
    console.log(animals[prop])
}

// .keys(), .values(), .items() --> python

// in JS :
console.log(Object.keys(animals))
console.log(Object.values(animals))

console.log("Lets talk about CLASESSS ... or object prototypes")


// custom object prototypes
//3 diff ways

function Dog(name, breed, color, tail=true){
    this.name = name; 
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    this.printinfo = function(){
        console.log(`This is a ${color} ${breed} named ${name}.`)
    };
}
let pup = new Dog('Rufus', 'Mutt', 'Brown/White', false)

console.log(pup)

// class-based object

class DogClass {
    constructor(name, breed, color, tail=true){
        this.name = name; 
        this.breed = breed;
        this.color = color;
        this.tail = tail;    
    }
    printinfo(){
        console.log(`This is a ${this.color} ${this.breed} named ${this.name}.`)
    }
}

let new_pup = new DogClass('Spot', "Pit", "brindle", false)
new_pup.printinfo()

class lab extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true);
        this.lazy = "super";
        this.lazyFactor = 0
    }
}


class Pug extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true);
        this.lazy = "super";
        this.lazyFactor = 0
    };
    noise(){
        console.log('SNORT');
        this.lazyFactor += 10;
        console.log(`how lazy is this pug?  ${this.lazyFactor}`)
    }
}
let puggy = new Pug('Paul', 'Pug', 'Black');
puggy.printinfo()
console.log(puggy.noise)
puggy.noise()
puggy.noise()
puggy.noise()




