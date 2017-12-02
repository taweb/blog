import React, { Component } from "react";

import Input from "./Input";

// fields: an array of objects with name and field properties and outputs an Input for each
// className: so you can style it from its parent
// button: the text for the submit button
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: props.fields.slice(),
        }
    }
    
    change(e, i) {
        const fields = this.state.fields.slice();
        fields[i].value = e.target.value;
        this.setState({ fields: fields });
    }

    disabled() {
        return !this.state.fields.every(({ value }) => value);
    }

    render() {
        const { className, button } = this.props;

        return (
            <form className={ "form" + (className ? " " + className : "") } >
                { this.state.fields.map(({ name, label, value }, i) => (
                    <Input
                        key={ i }
                        value={ value }
                        name={ name }
                        label={ label }
                        onChange={ e => this.change(e, i) }
                    />
                ))}
                <button disabled={ this.disabled() } className="btn btn-success">{ button }</button>
            </form>
        );
    }
} 

export default Form;
