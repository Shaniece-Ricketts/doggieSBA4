
import { fetchData } from './fetchData.mjs';

export async function changeData() {
  const apiUrl = 'https://api.thedogapi.com/v1/images/search?limit=10';
  try {
    const data = await fetchData(apiUrl);
    return data;
  } catch (error) {
    console.error('Error manipulating data:', error);
    throw error;
  }
}