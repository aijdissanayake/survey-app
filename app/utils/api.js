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
			console.log(response);			
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
		console.log('response');
		console.log(response);
		console.log(title);
		console.log('response');

		var resp = {};
		resp["title"] = title;
		resp["choices"] = response;
		resp = JSON.stringify(resp);


		var encodedURI = window.encodeURI("https://script.google.com/macros/s/AKfycbySehYgZd1ftj316wdNYQCchQ8GtTUZaTzQsmroosPX0kLY050/exec?data="+resp);
		var i = 0;

		
		return axios.get(encodedURI).then(function(response){
			console.log(response.data);			
			// var areas = response.data.areas;
			// var areaTitles = [];
			// for (i = 0; i < areas.length; i++){
			// 	areaTitles.push(areas[i]['title']);
			// }

			// return areaTitles;
		});

		// var encodedURI = window.encodeURI("https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec");

		var array = JSON.stringify({
  		"title": "Digital Marketing",
  		"choices":[[true,true,true],[true, true, true],[true, true, true]]
		});
		// var url = 'https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec?resp=' + encodeURIComponent(array);

		// return axios.get(encodedURI).then(function(response){
		// 	console.log(response);
		// });

		// axios.post('https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec', {
		//     "ti": 'Fred',
		//     "lastName": 'Flintstone'
		//   });

		// fetch(encodedURI, {  
		//     method: 'post',  
		//     headers: {  
		//       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
		//     },  
		//     body: 'foo=bar&lorem=ipsum'  
		//   })
		//   .then(json)  
		//   .then(function (data) {  
		//     console.log('Request succeeded with JSON response', data);  
		//   })  
		//   .catch(function (error) {  
		//     console.log('Request failed', error);  
		//   });

		 //  fetch(encodedURI,
			// {
			//     headers: {
			//       'Accept': 'application/json',
			//       'Content-Type': 'application/json'
			//     },
			//     method: "POST",
			//     body: JSON.stringify({title: 1, b: 2})
			// })
			// .then(function(res){ console.log(res) })
			// .catch(function(res){ console.log(res)});

			// request
			//    .post(encodedURI)
			//    .send({ title: 'Manny', species: 'cat' })
			//    .set('X-API-Key', 'foobar')
			//    .set('Accept', 'application/json')
			//    .end(function(err, res){
			//      if (err || !res.ok) {
			//        alert('Oh no! error');
			//      } else {
			//        alert('yay got ' + JSON.stringify(res.body));
			//      }
			//    });

		
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
		//   .catch(function (error) {
		//     console.log(error);
		//   });

		// axios.get('https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec')
		//   .then(function (response) {
		//     console.log(response);
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });



	}     
}
