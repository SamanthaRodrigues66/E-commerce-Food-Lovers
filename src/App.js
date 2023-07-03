import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App;