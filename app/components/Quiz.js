var React = require('react');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

class Quiz extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			questionNo: 0,
			quiz: null,
			markedPattern: [],
		};
		console.log(this.props.match.params.area);

		this.nextQuestion = this.nextQuestion.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
		this.updateChoice = this.updateChoice.bind(this);
	}

	componentDidMount(){

		api.fetchquiz(this.props.match.params.area).then(function(quiz) {
			console.log(quiz);
			this.setState(function() {
				return {
					quiz:quiz
				}
			});
		var markedPattern = [];	

		for (var i = 0; i <quiz.length ; i++) {
			var pattern = [];

			for (var j = 0 ; j < quiz[i].choices.length; j++) {
				pattern.push(false);
			}
			markedPattern.push(pattern);
		}

		this.setState(function() {
				return {
					markedPattern:markedPattern
				}
			});

		}.bind(this));


	}

	updateChoice(e){
		 console.log(e.target.id);
		 console.log(this.state.questionNo);
		 var markedPattern = this.state.markedPattern;
		 markedPattern[this.state.questionNo][e.target.id] = markedPattern[this.state.questionNo][e.target.id] ? false : true ;
		 console.log(markedPattern);
	}

	nextQuestion(){

		this.setState(function() {
			var next = this.state.questionNo + 1; 
			return {
				questionNo : next
			}
		});
	}

	previousQuestion(){

		this.setState(function() {
			var next = this.state.questionNo - 1; 
			return {
				questionNo : next
			}
		});
	}

	render() {
		if(this.state.quiz == null || this.state.markedPattern.length == 0){
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
			if(this.state.questionNo === 0){
				console.log(this.state.markedPattern.length);
				return (
				<div>
				<h1>Survey Quiz</h1>
				<Question title = {this.state.quiz[this.state.questionNo].title} questionNo = {this.state.questionNo} 
				choices={choices} onClick = {this.updateChoice} markedPattern = {this.state.markedPattern}/>
				<Next onClick = {this.nextQuestion}/>
				<Link className='button' to='/'>Change Area</Link>
				</div>
				)
			}
			else if(this.state.questionNo === this.state.quiz.length - 1){
				return (
				<div>
				<h1>Survey Quiz</h1>
				<Question title = {this.state.quiz[this.state.questionNo].title} questionNo = {this.state.questionNo} 
				choices={choices} onClick = {this.updateChoice} markedPattern = {this.state.markedPattern}/>
				<Back onClick = {this.previousQuestion}/>
				<Link className='button' to='/'>Change Area</Link>
				</div>
				)

			}
			else{
				return (
					<div>
					<h1>Survey Quiz</h1>
					<Question title = {this.state.quiz[this.state.questionNo].title} questionNo = {this.state.questionNo} 
					choices={choices} onClick = {this.updateChoice} markedPattern = {this.state.markedPattern}/>
					<Next onClick = {this.nextQuestion}/>
					<Back onClick = {this.previousQuestion}/>
					<Link className='button' to='/'>Change Area</Link>
					</div>
					)				
			}
			
		}
	}
}


function Question (props){
	console.log(props.markedPattern);
	return (
		<div className = 'title'>			
		<h3>{props.title}</h3>
		<ol className = 'surveys'>
		{props.choices.map(function(choice, index){
			var key = index.toString() +  props.questionNo.toString()
			return(
					<li key={key} >
					{props.markedPattern[props.questionNo][index]? 
					<input id = {index} onChange = {props.onClick} className ='choice' type="checkbox" name="test" value="test" checked/>
					: <input id = {index} onChange = {props.onClick} className ='choice' type="checkbox" name="test" value="test" /> }
					<div className ='choice' >{choice} </div>
					</li>
				)
			
		})}
		</ol>
		</div>
		)
}

function Next (props) {
	return (
		<div
		className = 'next'
		onClick = {props.onClick}>
		Next	
		</div>
		)
}

function Back (props) {
	return (
		<div
		className = 'next'
		onClick = {props.onClick}>
		Back	
		</div>
		)
}

module.exports = Quiz;