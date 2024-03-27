import Navbar from './Navbar';
import Home from './components/Home'
import About from './components/About'
import Pricing from './components/Pricing'

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/pricing":
      Component = Pricing
      break
    case "/about":
      Component = About
      break

    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>

    </>
  );
}

export default App;
