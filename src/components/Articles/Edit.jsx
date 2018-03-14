import React from "react";
import FourOhFour from "../FourOhFour";
import Form from "../Forms/Form";


// the add article component
const Edit = ({ fields, id, onEditClick }) => (
    <div>
        <h2>Edit Article</h2>
        { /* allows us to set HTML inside an element */ }
        {/*<div dangerouslySetInnerHTML={{ __html: article.get("article") }} />*/}

        {fields ? <Form className="panel-body" onEditClick={ onEditClick } fields={ fields } id={ id } button="Edit Article" /> : <FourOhFour />}
    </div>
);

export default Edit;
