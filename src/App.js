import styled from 'styled-components';
import './App.css';

import Header from './components/header';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SideBar />
      <Main />
      <Footer />
    </div>
  );
}


const AppCSS = styled.div`

`;



export default App;
