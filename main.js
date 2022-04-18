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

// 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: .forEachdocument.getElementById.appendChild` 
    // iterate over the planets array with .forEach
        // use the document.createElementeById to create an option
        // then give that option a value 
        // give that option text content/inner HTML
        // we have to append that to the select box (select line 18)

const select = document.getElementById("planets");
planetsArray.forEach((item) => {
    var option = document.createElement("option");
    option.innerHTML = item[0];
    option.value = item[0];
    select.appendChild(option);
        
})


function calculateWeight(weight, planetName) { 
  // 2. Write the code to return the correct weight 
    // input: weight in pounds on earth
    // output: weight on various plants compared to on earth 

    for (i = 0; i < planetsArray.length; i++) {
        if (planetsArray[i][0] == planetName) {
            return weight * planetsArray[i][1];
        }
    }

 }

function handleClickEvent(e) {
// 3. Create a variable called userWeight and assign the value of the user's weight. (.getElementById)
let userWeight = document.getElementById("user-weight").value;

// 4. Create a variable called planetName and assign the name of the selected planet from the drop down. (.getElementById (name of id).value)
let planetName = document.getElementById("planets").value;
console.log(userWeight, planetName);
// 5. Create a variable called result and assign the value of the new calculated weight. 
let result = calculateWeight(userWeight, planetName);

// 6. Write code to display the message shown in the screenshot. ("Your weight is X/result on planet Y/what was chosen")
let message = document.getElementById("output");

message.innerHTML= `If you were on ${planetName}, you would weigh ${result}lbs!`;
} 
   
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function. (once I do 3, 4, 7- console.log)
document.getElementById("calculate-button").addEventListener("click", () => handleClickEvent())

// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 
   
   
    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.
