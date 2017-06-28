var React = require('react');
var Link = require('react-router-dom').Link;

class Quiz extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Survey Quiz</h1>
        <Link className='button' to='/'>Back</Link>
      </div>
    )
  }
}

module.exports = Quiz;