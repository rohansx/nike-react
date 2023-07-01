import './App.css';
import { Typography } from "@mui/material";
import Footer from "./components/Footer/Footer";
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import WelcomeMessage from './components/Welcome/WelcomeMessage';
import ProductCard from './components/ProductsCard/ProductsCard';
import Featured from './components/Featured/Featured';
// import Promotion from './components/Promotion/Promotion';


function App() {
  return (
    <>
      <NavigationMenu />
      <WelcomeMessage />
      {/* <Promotion /> */}
      {/* <Featured /> */}
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;
