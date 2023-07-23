import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil';


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Accueil />} />
    </Routes> 
);  
}

export default App;
