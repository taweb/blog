import React from "react";

import Form from "../Forms/Form";

// the fields the form should have

// the add article component
const Add = ({fields, onSubmit}) => (
    <div>
        <h2>Add Article</h2>

        <Form onSubmit={ onSubmit} className="panel-body" fields={ fields } button="Add Article" />
    </div>
);

export default Add;
