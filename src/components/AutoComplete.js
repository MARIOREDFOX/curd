import React, {Component} from "react";
import './AutoCompleteText.css'

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.items = [
			"One",
			"Two",
			"Three",
			"Four",
			"Five"
		];
		this.state = {
			suggestions: [],
			text : '',
		}
	}
	onTextChange = (e) => {
	const value = e.target.value;
	let suggestions = [];
	if (value.length > 0) {
	    const regex = new RegExp(`^${value}`,'i');
	    suggestions = this.items.sort().filter(v => regex.test(v));
	    console.log(value);
	    
	}
	this.setState(() => ({ suggestions, text: value }));
	}
	
	suggestionSelect (value) {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}))
	}

	renderSuggestions () {
	    const { suggestions } = this.state;
	    if (suggestions.length === 0) {
	    	return null;
	    }
	    return (
	    	<ul>
	    		{suggestions.map((item) => <li onClick={() => this.suggestionSelect(item)}>{item}</li>)}
	    	</ul>
	    	);
	}

	
	render() {
		const { text } = this.state;
		return (
			<div className="AutoCompleteText">
				<input value={text} onChange={this.onTextChange} type="text" />

				<ul>
					{this.renderSuggestions()}
				</ul>
			</div>
		)
	}
}

export default AutoComplete;