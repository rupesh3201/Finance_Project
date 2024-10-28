import Navbar from "./component/Navbar";
import Home from "./pages/home"; // Make sure the case matches the file name

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home /> {/* Fixed to properly include the Home component */}
      </div>
    </>
  );
}

export default App;
