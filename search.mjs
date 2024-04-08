const API_KEY = 'live_yVimuoKTxLRDmmQIrVCS1890RlDsiWzNr1Axk2AbvNBzInwZhxjBJpEzAZtqfkDG';

export async function searchBreed(breed) {
  try {
    const breedResponse = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}&limit=1`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const breedData = await breedResponse.json();

    if (breedData.length === 0) {
      throw new Error(`Breed "${breed}" not found`);
    }

    const breedId = breedData[0].id;

    const imageResponse = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&limit=1`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const imageData = await imageResponse.json();

    if (imageData.length === 0) {
      throw new Error(`Image for breed "${breed}" not found`);
    }

    const imageUrl = imageData[0].url;

    return { breed: breedData[0], imageUrl };
  } catch (error) {
    throw new Error(`Failed to fetch information for breed "${breed}": ${error.message}`);
  }
}
