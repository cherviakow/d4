import SearchBar from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchData } from './components/api';
import { useEffect, useState } from 'react';
import './App.css'






function App() {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);


  

  
  const handleSearch = (newTopic) => {
     setTopic(newTopic);
  }
const handleLoadMore = () =>{
  setPage(page + 1);

}

useEffect(()=>{
if(topic===""){
  return;
}

async function getData() {
  try {
    const fetchItems = await fetchData(topic)
    setPhotos(fetchItems)
  } catch (error) {
    setError(true);
    
  }

}


  
getData();
},[page, topic])
  return (

    
    <>

 
<div>
  <SearchBar onSearch={handleSearch}/>
  {loading && <p>Loading data, please wait...</p>}
  {error && (<p>Smething wrong....</p>)}


{photos.length > 0 && <ImageGallery items={photos}/>}
<button onClick={handleLoadMore}>Load more</button>
 </div>   
    </>
  )
}

export default App


// useEffect(()=>{
//   async function getData (){
    
//     try{
//       setLoading(true);
//       const fetchItems = await fetchData();
//     setPhotos(fetchItems);
//     console.log(fetchItems);
    
    
//     } catch(error){
//       console.log(error,"error");
//     } finally{
//       setLoading(false);
//     }
    
//   }
  
// getData();
// },[]);
