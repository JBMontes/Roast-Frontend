import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import New from './components/New';
import About from './pages/About';
function App() {

  return (
    <>
      <Router>

        <NavBar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/coffee/new' element={<New />} />
          <Route path='/coffee/about' element={<About />}/>

        </Routes>

      </Router>

    </>
  )
}

export default App
