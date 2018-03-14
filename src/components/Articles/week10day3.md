


```
	this.state.fields.reduce((data, {name, value}) => {
		data[name] = value;
		return data;
	}, {});
```

actions.js
- all actions are placed in the same single file - this means that you need to use curly braces in the import eg
`import { addArticle } from "../data/actions";`
- note we do not do export default for actions