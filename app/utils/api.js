var axios = require('axios');

module.exports = {

	fetchJSONData: function() {
		var encodedURI = window.encodeURI("http://date.jsontest.com/");

		return axios.get(encodedURI).then(function(response){
			return response.data;
		});

	},

	fetchSurveys: function() {
		var encodedURI = window.encodeURI("https://api.myjson.com/bins/1a445r");
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
		var encodedURI = window.encodeURI("https://api.myjson.com/bins/1a445r");

		return axios.get(encodedURI).then(function(response){
			return response.data.title[0];
		});

	},

	fetchquiz: function(area){
		var encodedURI = window.encodeURI("https://api.myjson.com/bins/1a445r");
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

	submitQuiz: function(){

		// axios.post('https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec', {
		//     "ti": 'Fred',
		//     "lastName": 'Flintstone'
		//   });

		 
		axios({
		  method:'POST',
		  url:'https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec',
		  data: {
		    "ti": 'Fred',
		    "lastName": 'Flintstone'
		  }
		}).then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

		// axios.get('https://script.google.com/macros/s/AKfycbzyc2CG9xLM-igL3zuslSmNY2GewL5seTWpMpDIQr_5eCod7_U/exec')
		//   .then(function (response) {
		//     console.log(response);
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });



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
//   			</ul>\
//<Route path = '/:survey' component = {(props) => <Quiz area="UX"/>} />
// <Link className = 'button' to={{ pathname: '/survey', area: "Digital Marketing" }} >survey</Link>