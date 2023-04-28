import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Create from './pages/Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/view" element={<View/>} />
      </Routes>
    </Router>
  )
}

export default App
