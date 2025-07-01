/**
 * Paginates an array of data
 * @param {Array} data - Array of data to paginate
 * @param {number} page - Current page number
 * @param {number} pageSize - Number of items per page
 * @returns {Array} - Paginated data
 */
export const paginate = (data, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  };