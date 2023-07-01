import logo from './logo.svg';
import './App.css';
import { Typography } from "@mui/material";
import Footer from "./components/Footer/Footer";
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import WelcomeMessage from './components/Welcome/WelcomeMessage';
import Promotion from './components/Promotion/Promotion';


function App() {
  return (
    <>
      <NavigationMenu />
      <WelcomeMessage />
      <Footer />
      <Promotion />
    </>
  );
}

export default App;
