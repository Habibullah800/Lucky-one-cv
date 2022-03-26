import './App.css';
import BonusQues from './Component/BonusQues/BonusQues';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Shop></Shop>
      <BonusQues></BonusQues>
      <Footer></Footer>
    </div>
  );
}

export default App;
