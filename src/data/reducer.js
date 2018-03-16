// add List to our imports
import { Map, List } from "immutable";

// need to track the last ID used
// we've got two dummy items, so start at 2
let lastID = 2; 

// create a function that returns a new article Map
const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;

    return Map({
        id: lastID, 
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

// use the createArticle function
const addArticleData = (state, data) => state.update("articles", articles => articles.push(createArticle(data)));

const editArticleData = (state, data) => state.update("articles", articles => 
    articles.map(article => 
    (article.get("id") == data.id) ? article.set("title", data.title).set("article", data.article).set("tags", data.tags) : article));

const addCommentData = (state, data) =>
    state.update("articles", articles =>
    articles.map(article => 
        (article.get("id") == data.id) ? article.update("comments", comments => comments.push(Map({email: data.email, comment: data.comment}))) : article));
// console.log(data);

const setArticles = (state, { articles }) => state.set("articles", articles);

const deleteArticleFn = (state, object ) => state.update("articles", articles => articles.filter(article => article.get("id") !== object.id ));


const reducer = (state, action) => {
    switch (action.type) {
    	case "addArticle": return addArticleData(state, action);
    	case "editArticle": return editArticleData(state, action);
    	case "deleteArticle": return deleteArticleFn(state, action);
        case "setArticles": return setArticles(state, action);
        case "addComment": return addCommentData(state, action);
        default: return state;
    }
}

export default reducer;