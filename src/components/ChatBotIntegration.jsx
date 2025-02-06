import React from 'react';

const ChatbotIntegration = () => {
  const handleTestChatbot = () => {
    alert('Opening dummy chatbot integration...');
  };

  const handleIntegrationSuccess = () => {
    alert('Integration Successful!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Chatbot Integration & Testing</h2>
      <button onClick={handleTestChatbot} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4">Test Chatbot</button>
      <button onClick={handleIntegrationSuccess} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4">Integrate on Your Website</button>
      <div>
        <h3 className="font-semibold mb-2">Success!</h3>
        <button onClick={() => alert('Exploring Admin Panel...')} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-2">Explore Admin Panel</button>
        <button onClick={() => alert('Starting conversation with chatbot...')} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Start Talking to Your Chatbot</button>
      </div>
    </div>
  );
};

export default ChatbotIntegration;