
//Case 1

const triangleOne = (10 * 13) / 2;
const triangleTwo = (16.5 * 20.3) / 2;

console.log(`Triangle One has an area of ${triangleOne} km2 and Triangle Two has an area of ${triangleTwo} km2.`)

if (triangleOne > triangleTwo) {
    console.log("Triangle One is bigger than Triangle Two.");
} else if (triangleOne < triangleTwo) {
    console.log("Triangle Two is bigger than Triangle One.");
}
else {
    console.log("They are the same size!");
}

//Case 2

const triangleThree = (16.5 * 20.3) / 2;
const triangleFour = (20.3 * 16.5) / 2;

console.log(`Triangle Three has an area of ${triangleThree} km2 and Triangle Four has an area of ${triangleFour} km2.`)

if (triangleThree > triangleFour) {
    console.log("Triangle Three is bigger than Triangle Four.");
} else if (triangleThree < triangleFour) {
    console.log("Triangle Four is bigger than Triangle Three.");
}
else {
    console.log("They are the same size!");
}

//Case 3

const triangleFive = (7.8 * 5.6) / 2;
const triangleSix = (9.3 * 12.4) / 2;
const triangleSixRounded = triangleSix.toFixed(2); //Can I do this in a more efficient way without 
//creating a new const?


console.log(`Triangle Five has an area of ${triangleFive} km2 and Triangle Six has an area of ${triangleSixRounded} km2.`);

if (triangleFive > triangleSixRounded) {
    console.log("Triangle Five is bigger than Triangle Six.");
}
else if (triangleFive < triangleSixRounded) {
    console.log("Triangle Six is bigger than Triangle Five.");
}
else {
    console.log("They are the same size!");
}

/*
Answer to question:
We don't need parenthesis in this case? Don't we only need them when want to use a particular precedence order when adding and/or subtracting?
*/
