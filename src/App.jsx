import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import New from './components/New';
import About from './pages/About';
// import ListPage from './pages/ListPage';
import List from './components/List';
import Detail from './components/Detail';
import Edit from './components/Edit';
function App() {

  return (
    <>
      <Router>

        <NavBar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/coffees' element={<List />} />
          <Route path='/coffees/new' element={<New />} />
          <Route path='/coffees/about' element={<About />} />
          <Route path='/coffees/:id' element={<Detail />} />
          <Route path='/coffees/:id/edit' element={<Edit />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
