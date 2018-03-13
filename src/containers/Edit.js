import { connect } from "react-redux";
import Edit from "../components/Articles/Edit";

// the second argument passed to mapStateToProps represent the props passed in from the parent



const mapStateToProps = (state, { id }) => {

	const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);

	const fields = [
	    { name: "title", label: "Title", value: article.get("title") },
	    { name: "article", label: "Article", value: article.get("article") },
	];

    return {
        fields: fields,
    };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps)(Edit);