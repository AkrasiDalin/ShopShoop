import styled from 'styled-components';
import './App.css';

import Header from './components/header';
import SideBar from './components/side-bar';
import Main from './components/main';
import Footer from './components/footer';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {
      setData(json);
    })
  });

  return (
    <AppCSS className="App">
      <Header />

      <div className='row  row-cols-9'>
        <SideBar />
        <Main data={data} />
      </div>
      
      <Footer />
    </AppCSS>
  );
}


const AppCSS = styled.div`
  background: url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-fashion-wallpaper-hd-download.jpg')  no-repeat fixed;
  width: 100vw;
`;



export default App;
