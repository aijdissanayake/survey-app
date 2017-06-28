var axios = require('axios');

module.exports = {

	fetchJSONData: function() {
		var encodedURI = window.encodeURI("http://date.jsontest.com/");

		return axios.get(encodedURI).then(function(response){
			return response.data;
		});

	},

	fetchSurveys: function() {
		var encodedURI = window.encodeURI("http://localhost:3000/survey");
		var i = 0;

		return axios.get(encodedURI).then(function(response){			
			var areas = response.data.areas;
			var areaTitles = [];
			for (i = 0; i < areas.length; i++){
				areaTitles.push(areas[i]['title']);
			}

			return areaTitles;
		});

	},

	fetchtitle: function() {
		var encodedURI = window.encodeURI("http://localhost:3000/survey");

		return axios.get(encodedURI).then(function(response){
			return response.data.title[0];
		});

	},

	fetchquiz: function(area){
		var encodedURI = window.encodeURI("http://localhost:3000/survey");
		var i = 0;
		
		return axios.get(encodedURI).then(function(response){
			var areas = response.data.areas;
			var quiz= null;
			for (i = 0; i < areas.length; i++){
				if (areas[i].title == area) {
					quiz = areas[i].questions;
				}
			}

			return quiz;
		});

	}     
}
// fetchSurveys: function() {
// 		var encodedURI = window.encodeURI("http://localhost:3000/survey");

// 		return axios.get(encodedURI).then(function(response){
// 			return response.data.areas;
// 		});

// 	},

// <ul className = 'surveys'>
//   			{surveys.map(function(survey){
//   				return(
//   					<li 
//   					style = {survey === this.state.selectedSurvey ? { color: 'orange'} : null }
//   					onClick= {this.updateSurvey.bind(null,survey)}	    				
//   					key={survey}>

//   					{survey}

//   					</li>
//   					)
//   			},this)}
//   			</ul>