import React from 'react';
import '../mycsslibrary.css';
import Carousel from './carousel'
import ImageAction from './action'
import { connect} from 'react-redux'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class Page extends React.Component {
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
    this.props.history.push('/results')
  }

  componentDidMount() {
  const API_KEY='16724291-bd2828342ad814a2200a30935';
  axios.get("https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('room designs')+'&image_type=photo')
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
    const result=this.state.result.length?(this.state.result.map(res=>{
      return(
        <div class="col s12  m6 l4" key={res.id}>
          <div class="card">
            <div class="card-image">
              <img src={res.largeImageURL} alt='pics' height='300px'/>
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
        <p></p>
      </div>
    )
    return (
      <div className='cover'>
        <div className='div1'>
            <div className='row center'>
              <ul class="transparent ">
                <li class="cat col scale">
                <NavLink to="/livingroom" className="white-text">Living Rooms</NavLink>
                </li>
                <li class="cat col scale">
                <NavLink to="/bedrooms" className="white-text">Bedrooms</NavLink>
                </li>
                <li class="cat col scale">
                <NavLink to="/kitchen" className="white-text">Kitchens</NavLink>
                </li>
                <li class="cat col  scale">
                <NavLink to="/bathrooms" className="white-text">Bathrooms</NavLink>
                </li>
                <li class="cat col scale">
                <NavLink to="/exterior" className="white-text">Exteriors</NavLink>
                </li>
              </ul>
              <form onSubmit={this.handleSubmit}>
                <div class="input-field">
                  <input id="icon_prefix" name='search' type="text" className="white-text validate"placeholder='Search' onChange={this.handleChange}/>
                  <button type="submit" class="btn waves-effect waves-light">
                    Search
                  </button>
                </div>
              </form>
              <Carousel/>
              <div className='perspective-div up '>
                <h2 className='perspective-text center moveup'>Home Sweet Home</h2>
              </div>
            </div>
            <p className='center white-text'>From asian style to oriental interior design and lots more....
            check out our different collections of interior design ideas</p>
        </div>

        <div className='div2'>
          <div className='row'>
            {result}
          </div>
        </div>
        <div>
          <footer className='white-text center'>
             Interioz by Osakpolor Onaiwu
          </footer>
        </div>
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
    ImageAction:(search)=>{dispatch(ImageAction(search))}
  }
};
export default connect(null,mapDispatchToProps) (Page);
