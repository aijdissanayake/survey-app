var axios = require('axios');

module.exports = {
	fetchJSONData: function() {
		var encodedURI = window.encodeURI("http://date.jsontest.com/");

		return axios.get(encodedURI).then(function(response){
			return response.data;
		});

	},

	fetchSurveys: function() {
		var encodedURI = window.encodeURI("http://localhost:3000/surveyDetails");

		return axios.get(encodedURI).then(function(response){
			return response.data[0].surveys;
		});

	}    
}