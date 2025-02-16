import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/organisms/NavBar";
import TravelCardContainer from "./components/organisms/TravelCardContainer";
import Footer from "./components/organisms/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-[var(--color-primary)] flex justify-center items-center">
          <TravelCardContainer />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

