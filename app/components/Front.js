var React = require('react');
var api = require('../utils/api');
var PropTypes = require('prop-types');



class Front extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			title: null,
			selectedSurvey: "All",
			surveyDetails:null,
			surveys:null
		};

		this.updateSurvey = this.updateSurvey.bind(this);
	}

	componentDidMount(){

		api.fetchtitle().then(function(title) {

			this.setState(function() {
				return {
					title:title
				}
			});

		}.bind(this));

		api.fetchSurveys().then(function(areaTitles) {
			var newsurveys = areaTitles;

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
			return (<div> Loading..</div>)
		}
		else{
			return (
				<div>
				<Title title = {this.state.title}/>
				<AreaTitles areaTitles = {this.state.surveys} selectedAreaTitle = {this.state.selectedSurvey} onClick = {this.updateSurvey}/>
				<AreaDesc surveyDetails = {this.state.surveyDetails} />
				</div>
				)
		}
	}
}

// rendering stateless components

function AreaDesc (props){
	return (
		<div className = 'surveys' >
		<h3> Area Description Goes Here</h3>			
		<p> Selected At :  {JSON.stringify(props.surveyDetails,null,2)}</p>
		</div>
		)
}

function Title (props){
	return (
		<div className = 'title' >			
		<h1>{props.title}</h1>
		</div>
		)
}

function AreaTitles(props){
	return(
		<ul className = 'surveys'>
		{props.areaTitles.map(function(areaTitle){
			return(
				<li 
				style = {areaTitle === props.selectedAreaTitle ? { color: 'orange'} : null }
				onClick= {props.onClick.bind(null,areaTitle)}	    				
				key={areaTitle}>

				{areaTitle}

				</li>
				)
		})}
		</ul>
		);
}

AreaTitles.propTypes = {
	areaTitles : PropTypes.array.isRequired,
	selectedAreaTitle : PropTypes.string.isRequired,
	onClick : PropTypes.func.isRequired
} 

module.exports = Front;