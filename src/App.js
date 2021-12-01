import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Subscription from "./Components/Subscription";
import Books from "./Components/Books";
import News from "./Components/News";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      {/* Perm Header */}
      <Navbar />
      <Banner />
      <Subscription />
      <Books />
      <News />
      <Footer />
      {/* Cover */}
      {/* Body */}
    </div>
  );
}

export default App;
