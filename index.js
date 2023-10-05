/*User input for flavors */

const userInputString = prompt(
    "Please enter some flavors separated by commas.",
  );

const stringArray = userInputString.split(",");

/* Defining the const, objects and values to be updated */

const froyoFlavor = {
    Vanilla: 0,
    Chocolate: 0,
    Strawberry: 0,
    Coffee: 0,

};

/* This is checking my values to ensure the base 
table data is correct. */

console.log(Object.keys(froyoFlavor));

console.log(Object.values(froyoFlavor));

const count = Object.values(froyoFlavor);
let totalCount = 0;

for (let i = 0; i < count.length; i++) {
  totalCount += count[i];
}

console.log(totalCount);

console.table(froyoFlavor);

/* still working on getting the input from the user
to update the values so the table can output. Havent figured out the function.

function calculateCount(???value){
    let total = 0;
    for (const froyoFlavor){
      total += ???value[count];
    }
    return total;
  }

  console.table(total);
*/