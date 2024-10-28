// src/pages/Home.jsx

import backgroundImage from '../assets/financ_backimg.jpeg'; // Adjust the path as necessary

function Home() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        filter: 'blur(0.5px)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center p-5">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-blue-600 text-transparent bg-clip-text animate-gradient">
          Welcome to FinancePro
        </h1>
        <p className="mt-4 text-lg text-white">
          Manage your finances with ease and confidence.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
