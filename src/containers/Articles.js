
// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Articles from "../components/Articles/Articles";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        articles: state.get("articles"),
    };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Articles);