import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ffb35ede00e646be815b12b6af6bb9f7'
    }
})