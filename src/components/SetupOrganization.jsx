import React, { useState } from 'react';

const SetupOrganization = ({ nextStep }) => {
  const [companyName, setCompanyName] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [webpages] = useState([
    { title: 'Homepage', status: 'scraped' },
    { title: 'About Us', status: 'scraped' },
    { title: 'Contact', status: 'pending' },
    { title: 'Services', status: 'scraped' },
  ]);

  const fetchMetaDescription = () => {
    
    setMetaDescription('This is a sample meta description fetched from the website.');
  };

  const handleNext = () => {
    
    nextStep();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Setup Organisation</h2>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="url"
        placeholder="Company Website URL"
        value={websiteURL}
        onChange={(e) => setWebsiteURL(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={fetchMetaDescription} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4">Fetch Meta Description</button>
      <p className="mb-4">{metaDescription}</p>
      <h3 className="font-semibold mb-2">Detected Webpages</h3>
      <ul className="mb-4">
        {webpages.map((page, index) => (
          <li key={index} className="flex justify-between border-b py-2">
            <span>{page.title}</span>
            <span className={`font-semibold ${page.status === 'scraped' ? 'text-green-500' : 'text-yellow-500'}`}>{page.status}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleNext} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Move to Next Part of Setup</button>
    </div>
  );
};

export default SetupOrganization;