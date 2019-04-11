import { API_URL } from "../contrants";
import Axios from 'axios';

var categories = Axios.get(API_URL + "categories/").then((res) => {
  console.log(res.data);
  return res.data
})

export default categories;