import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <MyNav/>
      <Home/>
      <MyFooter/>
    </>
  )
}

export default App;
