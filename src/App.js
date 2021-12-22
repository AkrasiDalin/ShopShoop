import styled from 'styled-components';
import './App.css';

import Header from './components/header';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
    <AppCSS className="App">
      <Header />
      <NavBar />
      <SideBar />
      <Main />
      <Footer />
    </AppCSS>
  );
}


const AppCSS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



export default App;
