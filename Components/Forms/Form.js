import React, { useRef, useState } from 'react'

function Form() {
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const [allow,setAllow]=useState(false);
    function handleSubmit(e){
        e.preventDefault()
        setAllow(true);
    }
      return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>UserName : </label>
            <input type='text' ref={name} />
            <label>E-mail : </label>
            <input type='email' ref={email} />
            <label>Password : </label>
            <input type='password' ref={password} />
            <input type='submit' />
        </form>
      {allow && <div>
        <h1>Name : {name.current.value}</h1>
        <h1>Email : {email.current.value}</h1>
        <h1>Password : {password.current.value}</h1></div>}
    </div>
  )
}

export default Form
