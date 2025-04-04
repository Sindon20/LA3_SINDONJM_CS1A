const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

if (isNaN(maxLimit)|| maxLimit < 0){
    console.log("Invalid input. Please enter a positive integer.");
} else {
    let iterationCount = 0;

    for (let i = 0; i <= maxLimit; i++){
       for (let j = 0; j<= maxiLimit; j++){
          const addedValue = i = j;
          console.log('[${iterationCount}] {${iterationCount}] Added value is $ {addedValue}');
          iteratonCount++;
       }
    }
}