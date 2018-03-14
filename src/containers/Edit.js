import { connect } from "react-redux";
import Edit from "../components/Articles/Edit";
import { editArticle } from "../data/actions";

// the second argument passed to mapStateToProps represent the props passed in from the parent



const mapStateToProps = (state, { id }) => {

	const articles = state.get("articles");

    const article = articles.find(a => a.get("id") === +id);

    let fields = null;

    if(article){
    	fields = [
		    { name: "title", label: "Title", value: article.get("title") },
		    { name: "article", label: "Article", value: article.get("article") },
		   	{ name: "tags", label: "Tags", value: article.get("tags").join(", ") },
		];
    }else{
    	fields = null;
    }


    return {
        fields: fields,
        id: id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEditClick: data => dispatch(editArticle(data)),
    };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Edit);