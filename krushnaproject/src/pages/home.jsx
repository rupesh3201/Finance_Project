// src/pages/Home.jsx

import backgroundImage from '../assets/b.webp'; // Adjust the path as necessary

function Home() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        filter: 'blur(0px)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex items-center justify-between p-5 w-full max-w-6xl">
        {/* Left Side: Text Content */}
        <div className="text-left text-white">
          <h1 className="text-5xl font-bold">
            Welcome to FinancePro
          </h1>
          <p className="mt-4 text-lg">
            Manage your finances with ease and confidence.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded">
            Get Started
          </button>
        </div>
        
        
      </div>
    </div>
  );
}

export default Home;
