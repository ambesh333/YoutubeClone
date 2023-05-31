import axios from "axios";
const BASE_URL = "https://internship-service.onrender.com/videos";

export const fetchDataFromApi = async (url) => {
  try {
    
    const response = await axios.get(`${BASE_URL}?${url}`);
   
    const data = response.data;
    console.log("data from api.js", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }


};