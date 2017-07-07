var axios = require('axios');
var request = require('superagent');

module.exports = {

	fetchJSONData: function() {
		var encodedURI = window.encodeURI("http://date.jsontest.com/");

		return axios.get(encodedURI).then(function(response){
			return response.data;
		});

	},

	fetchSurveys: function() {
		var encodedURI = window.encodeURI("https://script.google.com/macros/s/AKfycbySehYgZd1ftj316wdNYQCchQ8GtTUZaTzQsmroosPX0kLY050/exec?noo=nooo");
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
		var encodedURI = window.encodeURI("https://script.google.com/macros/s/AKfycbySehYgZd1ftj316wdNYQCchQ8GtTUZaTzQsmroosPX0kLY050/exec");

		return axios.get(encodedURI).then(function(response){
			return response.data.title[0];
		});

	},

	fetchquiz: function(area){
		var encodedURI = window.encodeURI("https://script.google.com/macros/s/AKfycbySehYgZd1ftj316wdNYQCchQ8GtTUZaTzQsmroosPX0kLY050/exec");
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

	},

	submitQuiz: function(title, response){

		var resp = {};
		resp["title"] = title;
		resp["choices"] = response;
		resp = JSON.stringify(resp);


		var encodedURI = window.encodeURI("https://script.google.com/macros/s/AKfycbySehYgZd1ftj316wdNYQCchQ8GtTUZaTzQsmroosPX0kLY050/exec?data="+resp);
		var i = 0;

		
		return axios.get(encodedURI).then(function(response){})
		.catch(function (error) {
		    console.log(error);
		  });

		
		// axios({
		//   method:'POST',
		//   url:encodedURI,
		//   data: {
		//     "ti": 'Fred',
		//     "lastName": 'Flintstone'
		//   }
		// }).then(function (response) {
		//     console.log(response);
		//   })
		  // .catch(function (error) {
		  //   console.log(error);
		  // });


	}     
}
