import { API_URL } from "../contrants";
import Axios from 'axios';

var products = Axios.get(API_URL + "products/").then((res) => {
  console.log(res.data);
  return res.data
})

export default products;