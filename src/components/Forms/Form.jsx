import React, { Component } from "react";

import Input from "./Input";

// fields: an array of objects with name and field properties and outputs an Input for each
// className: so you can style it from its parent
// button: the text for the submit button
class Form extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.onClick = this.onClick.bind(this);
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

    submit(e) {
        e.preventDefault();
        let data = this.state.fields.reduce((data, field) => {
            data[field.name] = field.value;
            return data;
        }, {});

        this.props.onSubmit(data);

    }

    onClick(e) {
        e.preventDefault(); 

        let id = this.props.id;
        console.log("this is the edit id", id);
        let data = this.state.fields.reduce((data, field) => {
            data[field.name] = field.value;
            return data;
        }, {});
        data.id = id;

        this.props.onEditClick(data);

    }

    render() {
        const { className, button } = this.props;

        return (
            <form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
                { this.state.fields.map(({ name, label, value }, i) => (
                    <Input
                        key={ i }
                        value={ value }
                        name={ name }
                        label={ label }
                        onChange={ e => this.change(e, i) }
                    />
                ))}
                <button onClick={ this.onClick } disabled={ this.disabled() } className="btn btn-success">{ button }</button>
            </form>
        );
    }
} 

export default Form;
