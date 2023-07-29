import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil';
import DirecteurGeneral from './Components/DirecteurGeneral';
import Apropos from './Components/Apropos';
import NousChoisir from './Components/NousChoisir';
import VisionMissionValeur from './Components/VisionMissionValeur';
import Temoignage from './Components/Temoignage';
import CrecheMaternelle from './Components/CrecheMaternelle';
import Primair from './Components/Primair';
import CollegeLycee from './Components/CollegeLycee'

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Accueil />} />
      <Route path='/DireacteurGeneral' element={<DirecteurGeneral />} />
      <Route path='/Apropos' element={<Apropos />} />
      <Route path='/NousChoisir' element={<NousChoisir />} />
      <Route path='/VisionMissionValeur' element={<VisionMissionValeur />} />
      <Route path='/Temoignage' element={<Temoignage />} />
      <Route path='/CrecheMaternelle' element={<CrecheMaternelle />} />
      <Route path='/Primair' element={<Primair />}/>
      <Route path='/CollegeLycee' element={<CollegeLycee />} />
    </Routes> 
);  
}

export default App;
