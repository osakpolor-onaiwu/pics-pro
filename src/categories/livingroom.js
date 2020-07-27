import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class LivingRoom extends React.Component{
  state={
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

  componentDidMount() {
    const API_KEY='16724291-bd2828342ad814a2200a30935';
    axios.get("https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('living room designs')+'&image_type=photo')
    .then(res=>{
      this.setState({
        ...this.state,
        result:res.data.hits
      })
      console.log(this.state.result)
      console.log(this.state.search)
  })
}

  render(){
    return(
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

        </div>
        <footer>
          copyright Interioz by Osakpolor Onaiwu
        </footer>
      </div>
    )
  }
}

const mapStateToProps= state =>{
  return{

  }
};

const mapDispatchToProps = (dispatch) => {
  return{

  }
};

export default connect (mapStateToProps,mapDispatchToProps) (LivingRoom)
