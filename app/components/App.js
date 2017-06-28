var React = require('react');
var api = require('../utils/api');



class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			selectedSurvey: null,
			surveyDetails:null,
			surveys:null
		};

		this.updateSurvey = this.updateSurvey.bind(this);
	}

	componentDidMount(){
		var i = 0;
		api.fetchSurveys().then(function(surveys) {
			var newsurveys = [];
			 for ( i = 0; i < surveys.length; i++){
				newsurveys.push(surveys[i]);
			 }

			this.setState(function() {
				return {
					surveys:newsurveys
				}
			});

		}.bind(this));
		this.updateSurvey(this.state.selectedSurvey);
	}

	updateSurvey(survey){
		this.setState(function() {
			return {
				selectedSurvey : survey
			}
		});

		api.fetchJSONData().then(function(surveyDetails) {
			this.setState(function() {
				return {
					surveyDetails:surveyDetails
				}
			});
		}.bind(this));
	}


  render() {
  	var surveys = this.state.surveys;
  	if(this.state.surveys === null){
  		return (<div> </div>)
  	}
  	else{
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
		    	<Quiz surveyDetails = {this.state.surveyDetails} />
	    	</div>
	    )
	}
  }
}

function Quiz (props){
	return (
		<div className = 'surveys' >			
	    	{JSON.stringify(props.surveyDetails,null,2)}
		</div>
		)
}

module.exports = App;