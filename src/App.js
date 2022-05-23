import Navbar from "./navbar/Navbar";
import Slider from "./content/Slider";
import Body from "./Body";
import NavFooter from "./NavFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-content">
        <div
          className="container-slider position-relative"
          style={{ width: "100%", height: "250px" }}
        >
          <Slider />
        </div>
        <Body />
      </div>
      <NavFooter />
    </div>
  );
}

export default App;
