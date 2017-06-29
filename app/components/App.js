var React = require('react');
var Front = require('./Front');
var Quiz = require('./Quiz');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
    	<Router>
	      <div className='container'>
	        <Route exact path = '/' component = {Front}/>
	        <Route path = '/:area' component = {Quiz} />
	      </div>
      </Router>
    )
  }
}

module.exports = App;