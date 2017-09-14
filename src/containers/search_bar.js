import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}
      classname='input-group'>
          <input placeholder='Get an update onyour local five-day forecast' classname='form-control'
            value={this.state.term}
            onChange={this.onnputChange}
          />

          <span
            classnmae='inpuinput-group-btn'>
            <button type='submit' classname = 'btn btn-secondary'>
              Submit
            </button>
          </span>
        </form>
    )
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispathToProps)(SearchBar);
