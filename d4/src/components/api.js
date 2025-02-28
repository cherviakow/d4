import axios from "axios";

export const fetchData = async (topic) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${topic}&client_id=zEPdnHrUUl4l4s-30oNBr2tSssaoWd-jM1rJSftc68c`
 );
 return response.data.results;
}
 