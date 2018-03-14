import { connect } from "react-redux";
import Add from "../components/Articles/Add";

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

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps)(Add);