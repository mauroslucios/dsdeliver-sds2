import axios from "axios";

const API_URL ='https://sds2mauroslucios.herokuapp.com';

function  fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export default fetchOrders;