import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/Footer";
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import WelcomeMessage from './components/Welcome/WelcomeMessage';
import { Typography } from "@mui/material";


function App() {
  return (
    <>
      <NavigationMenu />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
