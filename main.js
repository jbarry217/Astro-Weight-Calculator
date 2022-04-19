var planetsArray = [
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

// Populate the dropdown element with the data found in the planets array. 

const select = document.getElementById("planets");
planetsArray.reverse();
planetsArray.forEach((item) => {
    var option = document.createElement("option");
    option.innerHTML = item[0];
    option.value = item[0];
    select.appendChild(option);
        
})

function calculateWeight(weight, planetName) { 
    for (i = 0; i < planetsArray.length; i++) {
        if (planetsArray[i][0] == planetName) {
            return weight * planetsArray[i][1];
        }
    }
 }

function handleClickEvent(e) {

let userWeight = document.getElementById("user-weight").value;

let planetName = document.getElementById("planets").value;
console.log(userWeight, planetName);

let result = calculateWeight(userWeight, planetName);

let message = document.getElementById("output");

message.innerHTML= `If you were on ${planetName}, you would weigh ${result}lbs!`;
} 
   
// Set the #calculate-button element's onclick method to use the handleClickEvent function. (once I do 3, 4, 7- console.log)
document.getElementById("calculate-button").addEventListener("click", () => handleClickEvent())

   
   
    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.
