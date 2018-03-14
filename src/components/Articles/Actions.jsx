import React, {Component} from "react";
import { Link } from "react-router-dom";

// a component to show the Edit and Delete buttons
class Actions extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);

	}


	onClick(e) {
		e.preventDefault(); 
		let id = this.props.article.get("id");
		console.log(id);

		this.props.onDeleteClick(id);

	}

	render() {

		return (
		    <div className="pull-right">
		        <Link to={ "/articles/" + this.props.article.get("id") + "/edit" } className="btn btn-info">
		            Edit Article
		        </Link>

		        { " " }

		        <button onClick={ this.onClick } className="btn btn-danger">Delete Article</button>
		    </div>
		);

	}
}

export default Actions;
