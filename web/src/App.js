import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Features from './pages/Features';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Error from './pages/Error';
import UseStatehook from "./pages/UseStatehook";
import FetchData from "./pages/FetchData";
import Product from "./pages/Product";
import Axios from "./pages/Axios";
import mainStore from "./Store/store";
import { Provider } from "react-redux";
import Productdetails from "./component/Productdetails";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Protected from "./component/Protected";
function App() {
  return (
    <div>
     <Router>
      <Provider store={mainStore}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<Protected Component={About}/>}/>
        <Route path="/Services" element={<Protected Component={Services}/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/!" element={<Projects/>}/>
        <Route path="/&" element={<Features/>}/>
        <Route path="/*" element={<Team Member/>}/>
        <Route path="/$" element={<Testimonial/>}/>
        <Route path="/404" element={<Error/>}/>
        <Route path="UseStatehook" element={<UseStatehook/>}/>
        <Route path="FetchData" element={<FetchData/>}/>
        <Route path="Product" element={<Product/>}/>
        <Route path="Axios" element={<Axios/>}/>
        <Route path="Productdetails" element={<Productdetails/>}/>
        <Route path="/Registration" element={<Register/>}/>
        <Route path="LogIn" element={<LogIn/>}/>
        
      </Routes>
      <Footer/>
      </Provider>
     </Router>
    </div>
  );
}
export default App;
