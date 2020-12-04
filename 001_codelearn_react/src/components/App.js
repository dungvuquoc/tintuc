import DieuHuongURL from '../router/DieuHuongURL';
import './../App.css';
import Danhsachtin from './Danhsachtin';
import Footer from './Footer';
import Nav from './Nav';
import Tinchitiet from './Tinchitiet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Nav />
        <DieuHuongURL />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
