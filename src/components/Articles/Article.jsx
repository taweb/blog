import React, { Component } from "react"; 

import FourOhFour from "../FourOhFour";

import Actions from "./Actions";
import Tags from "./Tags";
import Comments from "./Comments";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
class Article extends Component {

    componentDidMount() { //inherited from Component.  Has to be called by this name.  Called when the page first loads.
        this.props.onLoad(); //dispatches api action
    }

    render() {
        
        const { article, onDeleteClick, onAddComment } = this.props;

        return(

            <div>
                { /* the edit/delete buttons  */ }
                <Actions onDeleteClick={ onDeleteClick } article={ article } />

                <h2>{ article.get("title") }</h2>

                { /* allows us to set HTML inside an element */ }
                <div dangerouslySetInnerHTML={{ __html: article.get("article") }} />

                { /* use the Tags component to show the tags */ }
                <Tags tags={ article.get("tags") } />

                <hr /> 

                { /* use the comments component */ }
                <Comments onAddComment={ onAddComment } comments={ article.get("comments") } />
            </div>

        )
    }
};


export default Article;
