import React from "react";
import FourOhFour from "../FourOhFour";
import Form from "../Forms/Form";


// the add article component
const Edit = ({ fields }) => (
    <div>
        <h2>Edit Article</h2>


        { /* allows us to set HTML inside an element */ }
        {/*<div dangerouslySetInnerHTML={{ __html: article.get("article") }} />*/}

        <Form className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);

export default Edit;
