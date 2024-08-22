const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// ***Simple

/**
 * 
 */
function getRandomNumber(prev) {
    let num;
    do {
        num = Math.floor(Math.random() * colors.length);
    } while (num === prev);
    
    return num;
}

let randomNumber = 0;
/**
 * 
 */
function getSimpleColor() {
    // Get random number between 0 - length(colors)
    randomNumber = getRandomNumber(randomNumber);
    //console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

/**
 * 
 */
function getRandomHexNumber() {
    return Math.floor(Math.random() * hex.length);
}

// ***************************

// ***Hex

/**
 * 
 */
function getRandomHexColor() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomHexNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

// ***************************

let generatorFunction = getSimpleColor;
/**
 * 
 */
btn.addEventListener('click', () => {
    generatorFunction();
});

function changeGeneratorFunction(functionType) {
    console.log(functionType);
    switch (functionType) {
        case "hex":
            generatorFunction = getRandomHexColor;
            break;

        default: // "simple"
            generatorFunction = getSimpleColor;
    }
}