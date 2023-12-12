import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTemplate from './templates/HomTemplate/HomeTemplate';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='*' element={<Navigate to={''} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
