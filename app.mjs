import { searchBreed } from './search.mjs';

let currentBreed; // Variable to store the currently selected breed

async function displaySelectedBreed() {
    try {
        // Fetch breed information and image for the selected breed
        const { breed, imageUrl } = await searchBreed(currentBreed);

        console.log(`Breed: ${breed.name}`);
        console.log(`Breed Group: ${breed.breed_group}`);
        console.log(`Life Span: ${breed.life_span}`);
        console.log(`Image URL: ${imageUrl}`);

        // Display breed information and image on the page
        displayBreedOnPage(breed, imageUrl);
    } catch (error) {
        console.error(`Error fetching data for breed "${currentBreed}":`, error.message);
    }
}

function displayBreedOnPage(breed, imageUrl) {
    const breedContainer = document.getElementById('breed-container');
    breedContainer.innerHTML = ''; // Clear previous content

    const breedInfoDiv = document.createElement('div');
    breedInfoDiv.classList.add('breed-info');
    breedInfoDiv.innerHTML = `
        <h2>${breed.name}</h2>
        <p>Breed Group: ${breed.breed_group}</p>
        <p>Life Span: ${breed.life_span}</p>
    `;
    
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = breed.name;

    breedContainer.appendChild(breedInfoDiv);
    breedContainer.appendChild(imageElement);
}

document.getElementById('search-button').addEventListener('click', () => {
    // Get the selected breed from the dropdown list
    currentBreed = document.getElementById('breed-select').value;

    // Display the selected breed
    displaySelectedBreed();
});
