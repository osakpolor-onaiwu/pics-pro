
const iniState={
  result:[]
}

const Reducer =(state=iniState, action) => {
switch (action.type) {

case 'SUCCESS':
  console.log('working',action.response)
  return { ...state,
  result:action.response
}

case 'ERROR':
console.log('error',action.error)
 return state
default:
  return state
}
}

export default Reducer
