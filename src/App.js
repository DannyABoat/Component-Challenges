import Navbar from './components/navbar';
import Jumbotron from './components/jumbo';
import Footer from './components/footer';
import Carousel from './components/carousel';
import Content from './components/content';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <Footer/>
      <Carousel/>
      <Content/>
    </div>
  )
}

export default App;
