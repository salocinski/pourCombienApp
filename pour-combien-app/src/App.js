import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './page/accueil';
import Selection from './page/selection-range';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/selectionrange" element={<Selection />} />
      </Routes>
    </Router>
  );
}

export default App;
