import axios from "../../axios";

import { fromJS } from "immutable";

// import the setArticles action
import { setArticles } from "./state";
import { addArticle } from "./state";

export const getArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const articles = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        let action = setArticles(articles)
        dispatch(action);
        // console.log(response.data);
    });
};

export const postArticle = ({ title, article, tags }) => dispatch => {
	console.log(title);
	let tagsArr = tags.split(", ");
	axios.post("/articles", {
	    title: title,
	    article: article,
	    tags: tagsArr,
	}).then(response => {
		const article = fromJS(response.data);
		let action = addArticle(article);
		dispatch(action);
	});

        // console.log(response.data);

};