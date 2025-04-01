function greet(name) {
    return "Hello ".concat(name, "!");
}
;
var userName = "Ankit";
greet(userName); // Hello Ankit
// Basic types in Typescript
// 1. numbers(integers or floating point numbers)
var age = 25;
// 2. string(text)
var designation = "King";
// 3. boolean(true/false)
var isLoggedIn = false;
// 4. array: For collections of items of the same type. Two ways to write array types:
var numbers = [1, 23, 90, 76, 34];
var fruits = ["Apple", "Banana", "Orange"];
// 5. object
var user = {
    name: "Ankit",
    city: "Gurgaon"
};
// age is an optional property here
var user2 = {
    name: "Ankit",
    city: "Gurgaon"
};
// 6. tuple: where the number of elements in the array and the type of each element is known(fixed)
var person = ["John", 25]; // First element is string, second is number
// We can push more elements in tuple, but there won't be any type checking for them
// Named tuple: We can give a temporary name to element, but we cannot access it by that name
var graph = [55.2, 41.3];
// 7. enum: fixed/constants
// a) Numeric enums - default
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // Blue = 2
})(Color || (Color = {}));
// console.log(Color.Blue);  // 2
// b) Numeric enums - Initialized(auto-increment)
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 9] = "East";
    CardinalDirections[CardinalDirections["South"] = 10] = "South";
    CardinalDirections[CardinalDirections["West"] = 11] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// console.log(CardinalDirections.North); // 0
// console.log(CardinalDirections.West); // 11(9+1+1)
// c) Numeric enums - Fully-initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// console.log(StatusCodes.Success); // 200
// d) string enums(most used)
var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["East"] = "East";
    Directions["South"] = "South";
    Directions["West"] = "West";
})(Directions || (Directions = {}));
;
// console.log(Directions.West); // West
// 8. any: Disables type checking for a variable. Try not to use it
var number2 = "I am a string";
// 9. null and undefined: types that refer to JS primitives null and undefined
var y = undefined;
var z = null;
// 10. void: Used for functions that don't return a value.
// num2 is an optional property here
var printNumbers = function (num1, num2) {
    console.log(num1);
    if (num2)
        console.log(num2);
};
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
var Ankit = {
    firstName: "Ankit",
    lastName: "Bhardwaj",
    age: 25,
    occupation: "Developer"
};
var coloredRectangle = {
    height: 80,
    width: 100,
    color: "red"
};
// Unions(OR): When a value can be more than a single type
var height = 100;
// named parameters in functions, destructuring syntax
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
// Error in Type Assignment
var firstName = "Dylan"; // type string
// firstName = 33; // attempts to re-assign the value to a different type
// Casting is the process of overriding a type
// Casting with 'as'
var x = '56';
console.log(x); // 56
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft; // if house.yard is 
    console.log("yardSize: ", yardSize);
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log("Yard is ".concat(yardSize, " sqft"));
    }
}
var home = {
    sqft: 500,
};
// printYardSize(home); // Prints 'No yard'
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
printMileage(undefined);
