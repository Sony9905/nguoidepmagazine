import {Home} from './Pages/Home';
import { Route, Routes } from 'react-router'
import ResponsiveAppBar from './Components/Navigation';
import {Issues} from './Pages/Issues';
import {Events} from './Pages/Events';
import Magazines from './Magazines/allMagazines';
function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Home magazines={Magazines}/>
      <Routes>
        <Route path='/' element={<Home magazines={Magazines}/>}/>
        <Route path='/Home' element={<Home magazines={Magazines}/>}/>
        <Route path='/Issues' element={<Issues magazines={Magazines}/>}/>
        <Route path='/Contact' element={<Events/>}/>
      </Routes>
    </div>
  );
}

export default App;
