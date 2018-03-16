import axios from "../../axios";

import { fromJS } from "immutable";

// import the setArticles action
import { setArticles } from "./state";

export const getArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const articles = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
        // console.log(response.data);
    });
};