import SearchBar from './components/Header/Header';

// import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

import axios from 'axios';


function App() {

  useEffect(()=>{

    async function fetchData(){
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=zEPdnHrUUl4l4s-30oNBr2tSssaoWd-jM1rJSftc68c"
      )
      console.log(response);
      

    }
    fetchData();

  },[]);

  return (
    <>
    <SearchBar/>
 
<div>
  !!!
</div>
    </>
  )
}

export default App
