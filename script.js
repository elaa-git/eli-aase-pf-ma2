// question 1

var petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[1]);

// question 3

petArray.push("sheep");

// question 4

console.log(petArray.length);

// question 5

var catObject = {
    name: "Missy",
    colour: "white",
    age: 4
    };

// question 6

console.log(catObject.age);

// question 7

var catArray = [
    {
        name: "Missy",
        colour: "white",
        age: 4
        }
];

// question 8

for(var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
}

// question 9

function logToConsole(theNumber) {
    console.log(theNumber);
}
    
logToConsole(99); 

// question 10

function logToConsole(theAnimal) {
    console.log(theAnimal);
}

logToConsole("donkey");