import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import New from './components/New';
function App() {

  return (
    <>
      <Router>

        <NavBar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/coffee/new' element={<New />} />

        </Routes>

      </Router>

    </>
  )
}

export default App
