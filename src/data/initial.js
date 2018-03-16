import { Map, List } from "immutable";


const initial = Map({
    // stores the list of all titles - for the homepage
    titles: List([]),

    // stores articles that have been fully loaded
    // should use the article ID as the key for easy access
    articles: Map({})
})

export default initial;