import SearchBar from './components/Header/Header';
import {fetchData} from "../src/components/api";

import { useEffect, useState } from 'react';
import './App.css'




function App() {
 
  const [photos, setPhotos] = useState([]);


  const handleSearch = 

  useEffect(()=>{

    async function gethData(){
      try{
        const fetchData = await fetchData();
        setPhotos(fetchData);
      } catch (error){
        console.log(error, 'error');
        
      }
      

    }
    

  },[]);

  return (
    <>
    <SearchBar onSearch={handleSearch}/>
 
<div>
  {photos.length > 0 && (
    <ul>
      {photos.map(({id, urls, alt_description}) => (
       <li key={id}>
        <img src={urls.small} alt={alt_description} />
       </li> 
      ))}
      
    </ul>
  )}



</div>
    </>
  )
}

export default App
