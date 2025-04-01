function greet(name: string): string {
    return `Hello ${name}!`;
};

const userName: string = "Ankit";

greet(userName);  // Hello Ankit

// Basic types in Typescript

// 1. numbers(integers or floating point numbers)
const age: number = 25;

// 2. string(text)
const designation: string = "King";

// 3. boolean(true/false)
const isLoggedIn: boolean = false;

// 4. array: For collections of items of the same type. Two ways to write array types:
const numbers: number[] = [1, 23, 90, 76, 34];
const fruits: Array<string> = ["Apple", "Banana", "Orange"];

// 5. object
const user: { name: string, city: string } = {
    name: "Ankit",
    city: "Gurgaon"
}

// age is an optional property here
const user2: { name: string, city: string, age?: number } = {
    name: "Ankit",
    city: "Gurgaon"
}

// 6. tuple: where the number of elements in the array and the type of each element is known(fixed)
let person: [string, number] = ["John", 25]; // First element is string, second is number
// We can push more elements in tuple, but there won't be any type checking for them
// Named tuple: We can give a temporary name to element, but we cannot access it by that name
const graph: [x: number, y: number] = [55.2, 41.3];

// 7. enum: fixed/constants
// a) Numeric enums - default
enum Color {
    Red,    // By default, Red = 0
    Green,  // Green = 1
    Blue    // Blue = 2
}
// console.log(Color.Blue);  // 2

// b) Numeric enums - Initialized(auto-increment)
enum CardinalDirections {
    North,
    East = 9,
    South,
    West
}
// console.log(CardinalDirections.North); // 0
// console.log(CardinalDirections.West); // 11(9+1+1)

// c) Numeric enums - Fully-initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// console.log(StatusCodes.Success); // 200

// d) string enums(most used)
enum Directions {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
};
// console.log(Directions.West); // West

// 8. any: Disables type checking for a variable. Try not to use it
const number2: any = "I am a string";

// 9. null and undefined: types that refer to JS primitives null and undefined
let y: undefined = undefined;
let z: null = null;

// 10. void: Used for functions that don't return a value.
// num2 is an optional property here
const printNumbers = (num1: number, num2?: number): void => {
    console.log(num1);
    if (num2) console.log(num2);
}

// 11. Type Aliases: defining types with a custom name (an Alias)
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};


// 12. Interfaces: Interfaces are similar to type aliases, except they only apply to object types, not primitives
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    occupation?: string; // Optional property (may or may not be present)
}

const Ankit: Person = {
    firstName: "Ankit",
    lastName: "Bhardwaj",
    age: 25,
    occupation: "Developer"
}

// *** Extending interfaces: properties of exisiting interface plus something new ***
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 80,
    width: 100,
    color: "red"
}

// Unions(OR): When a value can be more than a single type
const height: number | string = 100;

// named parameters in functions, destructuring syntax
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// Error in Type Assignment
let firstName: string = "Dylan"; // type string
// firstName = 33; // attempts to re-assign the value to a different type
