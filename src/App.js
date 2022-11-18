import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import COUNTRIES_LIST from './countries.json'



function App() {
  return (
    <div className="App">
      <Navbar/>  
      <CountriesList countries={COUNTRIES_LIST}/>      
      <CountryDetails/>        
    </div>
  );
}

export default App;
