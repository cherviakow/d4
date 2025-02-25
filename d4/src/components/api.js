import axios from "axios";

 export const fetchData = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/?client_id=zEPdnHrUUl4l4s-30oNBr2tSssaoWd-jM1rJSftc68c"
    )

    return (response.data);

  }
 