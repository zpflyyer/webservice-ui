import axios from 'axios';

var backend_base = "http://localhost:8080";
export function getTrips() {
    axios.get(backend_base + "/getTrips").then(res => {
        return res.data;
    })
}