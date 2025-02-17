import SearchBar from './components/Header/Header';

import { useEffect, useState } from 'react';
import './App.css'

import axios from 'axios';


function App() {

  const [photos, setPhotos] = useState([]);



  useEffect(()=>{

    async function fetchData(){
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=zEPdnHrUUl4l4s-30oNBr2tSssaoWd-jM1rJSftc68c"
      )
      console.log(response);
      setPhotos(response.data.photos);

    }
    fetchData();

  },[]);

  return (
    <>
    <SearchBar/>
 
{/* <div>
  {photos.length > 0 && (
    <ul>
      {photos.map(({id,}))}
      <li></li>
    </ul>
  )}



</div> */}
    </>
  )
}

export default App
