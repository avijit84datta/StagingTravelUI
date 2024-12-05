import axios from 'axios';

const API_URL = "https://nexgentravelportal-akctcscbabh5duhn.westeurope-01.azurewebsites.net/api/Destination"; // Replace with your actual API URL
//const API_URL = "https://localhost:7282/api/Destination";
export const fetchDestinations = async () => {
    try {
        console.log("Fetching destinations from:", API_URL);
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching destinations", error);
        throw error;
    }
};