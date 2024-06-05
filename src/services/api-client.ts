import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '4416ca5a48454d9d8bbd04afe0f61c00'
    }
})