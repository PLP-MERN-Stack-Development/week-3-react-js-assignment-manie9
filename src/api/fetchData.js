// filepath: /src/api/fetchData.js
export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };