var React = require('react');

class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			selectedSurvey: 'All',
		};

		this.updateSurvey = this.updateSurvey.bind(this);
	}

	updateSurvey(survey){
		this.setState(function() {
			return {
				selectedSurvey : survey
			}
		});
	}


  render() {
  	var surveys = ['Digital Marketing', 'Product Management', 'UX', 'Product Support'];

    return (
    	<div>
	    	<ul className = 'surveys'>
	    	{surveys.map(function(survey){
	    		return(
	    			<li 
	    				style = {survey === this.state.selectedSurvey ? { color: 'orange'} : null }
	    				onClick= {this.updateSurvey.bind(null,survey)}	    				
	     				key={survey}>

	    				{survey}

	    			</li>
	    			)
	    	},this)}
	    	</ul>
    	</div>
    )
  }
}

module.exports = App;