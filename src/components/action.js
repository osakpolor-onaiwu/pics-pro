import axios from 'axios'

const ImageAction=(search)=>{
  return(dispatch,getState)=>{
    const API_KEY='16724291-bd2828342ad814a2200a30935';
    const endAPI=encodeURIComponent(search)+'&image_type=photo'
    axios.get("https://pixabay.com/api/?key="+API_KEY+"&q="+endAPI)
    .then(response=>{
      dispatch({type:'SUCCESS',response:response.data.hits})
    }).catch(err=>{
      dispatch({type:'ERROR',error:err})
    })
  }
}

export default ImageAction
