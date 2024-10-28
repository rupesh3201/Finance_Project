import Navbar from "./component/Navbar"; // Ensure the path is correct
import Home from "./pages/home"; // Ensure the path and case match the file name

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home /> {/* This will render the Home component */}
      </div>
    </>
  );
}

export default App;
