import React from 'react'
import axios from 'axios'
import ImageAction from '../components/action'
import {connect} from 'react-redux'

class Music extends React.Component{
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

// gets data from api
  componentDidMount() {
    const API_KEY='16724291-bd2828342ad814a2200a30935';
    axios.get("https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('Music')+'&image_type=photo')
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
          <div className="col s12  m6 l4" key={res.id}>
            <div className="card">
              <div className="card-image">
                <img src={res.largeImageURL} alt='pics' height='300px'/>
                <span className="card-title"></span>
              </div>
              <div className="card-content">
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
    return(
      <div>
        <div className="row  background">
        <div className=' row  '>
              <div className="col s12 m12 l12">
                <h4 className='center white-text'>GOOD MUSIC! MORE THAN MEDICINE</h4>
              </div>
          </div>
         <div className='container'>
            <form className="col s12 m12 l12" onSubmit={this.handleSubmit}>
                <div className="input-field browser-default">
                  <input id="icon_prefix"
                  required={true}
                  name='search'
                  type="text"
                  className=" browser-default validate"
                  placeholder='Search'
                   onChange={this.handleChange}
                   />

                  <button type="submit">
                    Search
                  </button>
                </div>
            </form>
          </div>
        </div>
        <div className="row">
            {result}
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

export default connect (mapStateToProps,mapDispatchToProps) (Music)
