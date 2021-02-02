import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home.js'
import ResultsCard from './components/pages/ResultsCard/ResultsCard';
import Search from './components/pages/Search/Search.js'


function App() {
  return (
    <div >
      <div className="Container">
        <Header />
        <User />
      </div>
    </div>
  );
}

export default App;
