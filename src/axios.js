import axios from "axios";

export default axios.create({
    baseURL: "http://deanna.restful.training/api/",
    params: {
        key: "5156d90d5db6f157aa624a80abb6456958c0ec36",
    },
    headers: {
        Accept: "application/json",
    },
});