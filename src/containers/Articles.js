
// react redux's connect function
import { connect } from "react-redux";
import { getArticles } from "../data/actions/api";

// import in the Articles component
import Articles from "../components/Articles/Articles";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        articles: state.get("titles"),
    };
};

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getArticles()),
    };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Articles);