
import './App.css';
import {BrowserRouter as  Router , Routes , Route } from "react-router-dom";
import Contact from './pages/Contact';
import Project from './pages/Project';
import Home from './pages/Home';
import Head from './Components/Head';
import Footer from './Components/Footer';

function App() {
  return (
   <div className='App'>
    <Router>
      <Head />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Project' element={<Project />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>    
   </div>
   
  );
}

export default App;
