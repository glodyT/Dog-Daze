const fs = require('fs');

// Read the JSON file containing the dog data
fs.readFile('dogs.json', 'utf8', (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }

  try {
    // Parse the JSON data into a JavaScript object
    const parsedData = JSON.parse(data);

    // Loop through each dog and display formatted information in the console
    parsedData.dogs.forEach((dog) => {
      console.log(`Name: ${dog.name}`);
      console.log(`Age: ${dog.age}`);
      console.log(`Breed: ${dog.breed}`);
      console.log(`Gender: ${dog.gender}`);
      console.log(`Description: ${dog.description}`);
      console.log('-----------------------------');
    });
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});