var React = require('react');
var Front = require('./Front');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Front/>
      </div>
    )
  }
}

module.exports = App;