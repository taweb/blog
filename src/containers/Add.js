import { connect } from "react-redux";
import Add from "../components/Articles/Add";
import { addArticle } from "../data/actions"; 

// the second argument passed to mapStateToProps represent the props passed in from the parent



const mapStateToProps = (state) => {
	
    let fields = [
	    { name: "title", label: "Title", value: "" },
	    { name: "article", label: "Article", value: "" },
	   	{ name: "tags", label: "Tags", value: "" },
	];
 
    return {
        fields: fields,
    };
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: data => dispatch(addArticle(data)),
	};
};



// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Add);