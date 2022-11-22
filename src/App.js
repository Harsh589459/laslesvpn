
import './App.css';
import Footer from './components/footer/Footer';
import Huge from './components/HugeGlobal/Huge';
import Navbar from './components/navbar/Navbar';
import Plan from './components/plan/Plan';
import Provide from './components/provide/Provide';
import Subscribe from './components/subscribe/Subscribe';
import Trust from './components/Trust/Trust';
import Uls from './components/uls/Uls';
import Want from './components/Want/Want';


function App() {
  return (
    <div>
      <Navbar />
      <Want />
      <Uls />
      <Provide />
      <Plan />
      <Huge />
      <Trust />
      <Subscribe />
      <Footer />


    </div>
  );
}

export default App;
