import React, { useState, useEffect } from 'react';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 5;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <ul>
        {paginatedData.map((item) => (
          <li key={item.id} className="border-b py-2">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / postsPerPage)))}
          disabled={currentPage === Math.ceil(filteredData.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApiData;
