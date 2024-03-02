

import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import SignUp from './pages/Signup';
import { SignIn } from './pages/Signin';

function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} / >
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>


    </Routes>
    </>
  );
}

export default App;