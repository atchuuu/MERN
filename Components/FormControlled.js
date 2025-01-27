import React, { useReducer } from 'react'
function reducer(state,action){
  switch(action.type){
    case 'name':
      return {...state,name:action.value}
    case 'email':
      return {...state,email:action.value}
    default:
      return state;
  }
}
function FormControlled() {
    const[state,dispatch]=useReducer(reducer,{name:'',email:''})
  return (
    <div>
      <form>
        <input type='text' placeholder='Enter your name' onChange={(e)=>dispatch({type:"name",value:e.target.value})}/>
        <input type='email' placeholder='Enter your email'onChange={(e)=>dispatch({type:"email",value:e.target.value})} />
      </form>
    </div>
  )
}

export default FormControlled
