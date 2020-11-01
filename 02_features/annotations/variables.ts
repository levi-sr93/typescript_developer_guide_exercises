let apples: number = 5;

apples = 10;
// apples = 'ten'; Give us an error.

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car {}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use Annotations
//1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); //{x: 10, y: 20}

//2) When we declare a variable in one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

words.map((word) => {
  if (word === 'green') {
    foundWord = true;
  }
});

//3) When a variable whose type can not be inferred correctly;
let numbersArray = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > 0) {
    numberAboveZero = numbersArray[i];
  }
}
