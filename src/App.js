import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home1.js';
import Home2 from './routes/Home2.js';
import Speakers from './routes/Speakers.js';
import Pages from './routes/Pages.js';
import Schedule from './routes/Schedule.js';
import Sponsors from './routes/Sponsors.js';
import News from './routes/News.js';
import Contact from './routes/Contact.js';
import Buyticket from './routes/Buyticket.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home2' element={<Home2 />}/>
        <Route path='/Speakers' element={<Speakers />}/>
        <Route path='/Pages' element={<Pages />}/>
        <Route path='/Schedule' element={<Schedule />}/>
        <Route path='/Sponsors' element={<Sponsors />}/>
        <Route path='/News' element={<News />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Buyticket' element={<Buyticket />}/>
      </Routes>
    </div>
  );
}

export default App;
