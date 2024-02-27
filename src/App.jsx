import './App.css';
import { Routes, Route} from 'react-router-dom'; 
import Navbar from "./Navbar/Navbar";
import Service from './Service/Service';
import TopCities from "./TopCities/TopCities";
import Contact from "./Contact/Contact";
import HomeApp from './HomeApp';

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>  
        <Route exact path="/" Component={HomeApp} />  
        <Route path="/service" Component={Service} /> 
        <Route path="/fillials" Component={TopCities} /> 
        <Route path="/contact" Component={Contact} /> 
      </Routes>
    </>
  );
}

export default App;
