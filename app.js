//  Basic Fetch Request
fetch('https://dogapi.dog/api/v2/breeds')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data && Array.isArray(data.data)) {
      console.log('List of Dog Breeds:');
      data.data.forEach(breed => {
        console.log(breed);
      });
    } else {
      console.error('Invalid JSON format in response:', data);
    }
  })
  .catch(error => console.error('Fetch Error:', error));


fetch('https://dogapi.dog/api/v2/breeds')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data && Array.isArray(data.data)) {
      const breedList = document.createElement('ul');
      data.data.forEach(breed => {
        const listItem = document.createElement('li');
        listItem.textContent = JSON.stringify(breed); 
        breedList.appendChild(listItem);
      });
      document.body.appendChild(breedList);
    } else {
      console.error('Invalid JSON format in response:', data);
    }
  })
  .catch(error => console.error('Fetch Error:', error));
 // : Displaying Detailed Breed Information
function fetchBreedDetails(breedId) {
    const breedDetailsContainer = document.getElementById('breed-details');
  
    fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(breedDetails => {
        if (breedDetails && breedDetails.data && breedDetails.data.attributes) {
          // Creates an HTML element to display breed details
          const detailsElement = document.createElement('div');
          detailsElement.innerHTML = `
            <h2>${breedDetails.data.attributes.name}</h2>
            <p><strong>Description:</strong> ${breedDetails.data.attributes.description}</p>
            <p><strong>Life Span:</strong> ${breedDetails.data.attributes.life.min} to ${breedDetails.data.attributes.life.max} years</p>
            <p><strong>Male Weight:</strong> ${breedDetails.data.attributes.male_weight.min} to ${breedDetails.data.attributes.male_weight.max} kg</p>
            <p><strong>Female Weight:</strong> ${breedDetails.data.attributes.female_weight.min} to ${breedDetails.data.attributes.female_weight.max} kg</p>
          `;
  
          // Clears all previous details and append the new details
          breedDetailsContainer.innerHTML = '';
          breedDetailsContainer.appendChild(detailsElement);
        } else {
          console.error('Invalid JSON format in response:', breedDetails);
        }
      })
      .catch(error => console.error('Fetch Error:', error));
  }
  
  
  fetchBreedDetails('68f47c5a-5115-47cd-9849-e45d3c378f12'); 
  
  
