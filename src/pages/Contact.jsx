import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Contact Us</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-4">
        For inquiries, please email us at <a href="mailto:support@plptaskmanager.com" className="text-blue-500">support@plptaskmanager.com</a>.
      </p>
    </div>
  );
};

export default Contact;