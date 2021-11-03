import './App.css';
import Header from './Header';
import Otpv from './Otpv';
import {Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
    <div className="App"> 
    <Header />
    
      <Route path="/Otpv">
        <Otpv />  
      </Route>
     
      
     
     

    </div>
    </BrowserRouter>
   
  );
}

export default App;
