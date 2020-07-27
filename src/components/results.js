import React, { Component } from 'react';
import {connect} from 'react-redux'
import ImageAction from './action'

class Results extends Component {
  state = {
    search:'',
    result:[]
  }

  handleChange=(e)=>{
    this.setState({
      ...this.state,
      search:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.ImageAction(this.state.search)
    console.log(this.state.search)
  }

  render() {
    const results=this.props.result.length?(this.props.result.map(res=>{
      return(
        <div class="col s12  m6 l4" key={res.id}>
          <div class="card moveup">
            <div class="card-image">
              <img src={res.largeImageURL} alt='loading...' height='300px'/>
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <p>by {res.user} on pixabay</p>
            </div>
          </div>
        </div>
      )
    })):(
    <div>
      <p>loading result</p>
    </div>)
    return (
      <div>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div class="input-field">
              <input id="icon_prefix" name='search' type="text" className="white-text validate"placeholder='Search' onChange={this.handleChange}/>
              <button type="submit" class="btn waves-effect waves-light">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          {results}
        </div>
        <footer>
          copyright Interioz by Osakpolor Onaiwu
        </footer>
      </div>
    );
  }
}

const mapStateToProps= state =>{
  return{
    result:state.result
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
      ImageAction:(search)=>{dispatch(ImageAction(search))}
  }
};

export default connect(mapStateToProps,mapDispatchToProps) (Results);
