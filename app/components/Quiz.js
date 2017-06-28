var React = require('react');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

class Quiz extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			questionNo: 0,
			quiz: null
		};

		//this.updateSurvey = this.updateSurvey.bind(this);
	}

	componentDidMount(){

		api.fetchquiz(this.props.area).then(function(quiz) {

			this.setState(function() {
				return {
					quiz:quiz
				}
			});
			console.log(quiz);
		}.bind(this));
	}

	render() {
		if(this.state.quiz == null){
			return (
				<div>
				<h1>Survey Quiz</h1>
				<div>Please Wait...</div>
				<Link className='button' to='/'>Change Area</Link>
				</div>
				)
		}
		else{
			var choices = this.state.quiz[this.state.questionNo].choices;
			return (
				<div>
				<h1>Survey Quiz</h1>
				<Question title = {this.state.quiz[this.state.questionNo].title} choices={choices}/>
				<Link className='button' to='/'>Change Area</Link>
				</div>
				)
		}
	}
}

function Question (props){
	return (
		<div className = 'title'>			
		<h3>{props.title}</h3>
		<ol className = 'surveys'>
		{props.choices.map(function(choice){
			return(
				<li 
				//style = {areaTitle === props.selectedAreaTitle ? { color: 'orange'} : null }
				//onClick= {props.onClick.bind(null,areaTitle)}	    				
				key={choice}>

				<input className ='choice' type="checkbox" name="test" value="test"/> 
					<div className ='choice' >{choice} </div>
				</li>
				)
		})}
		</ol>
		</div>
		)
}

module.exports = Quiz;