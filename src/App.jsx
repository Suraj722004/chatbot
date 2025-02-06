import { useState } from 'react'

import './App.css'
import ChatbotIntegration from './components/ChatBotIntegration';
import UserRegistration from './components/UserRegistration';
import SetupOrganization from './components/SetupOrganization';


function App() {
  const [step, setStep] = useState(1); 

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Chatbot Setup</h1>
      {step === 1 && <UserRegistration nextStep={nextStep} />}
      {step === 2 && <SetupOrganization nextStep={nextStep} />}
      {step === 3 && <ChatbotIntegration />}
    </div>
        
    </>
  )
}

export default App
