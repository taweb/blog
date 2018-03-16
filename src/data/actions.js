export const addArticle = ({ title, article }) => {
	return {
		type: "addArticle",
		title: title,
		article: article,
	}; 
};
 

export const deleteArticle = ( id ) => {
	return {
		type: "deleteArticle",
		id: id,
	}
}

export const editArticle = ({ id, title, article, tags }) => {
	
	let tagArr = tags.split(", ");

	return {
		type: "editArticle",
		id: id,
		title: title,
		article: article,
		tags: tagArr,
	};
};

export const addComment = ({ email, comment, id }) => {

	return {
		type: "addComment",
		id: id,
		email: email,
		comment: comment,
	};
};