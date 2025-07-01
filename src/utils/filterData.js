/**
 * Filters an array of objects based on a search term
 * @param {Array} data - Array of objects to filter
 * @param {string} searchTerm - Search term to filter by
 * @param {string} key - Key in the object to search (e.g., "title")
 * @returns {Array} - Filtered array
 */
export const filterData = (data, searchTerm, key) => {
    return data.filter((item) =>
      item[key].toLowerCase().includes(searchTerm.toLowerCase())
    );
  };