import React from 'react'

export default function Login({setUser}) {
    const sendLogin= async (e) => {
        e.preventDefault()
        const name = e.target.email.value
        const password = e.target.password.value
        const res = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            body: JSON.stringify({
                email: name,
                password: password
            }),
            headers:{
                "Content-Type": "application/json"
            }
        }) 
        const data = await res.json()
        if (data.status === 'ok') {
            setUser(data.user)
        }
        console.log(data)   
        
    }
  return (
    <div>
        <form onSubmit= { (e)=> {
            sendLogin(e)
        }} >
            <input type="text" name="email"/>
            <input type="password" name="password"/>
            <button>Submit</button>
        </form>
    </div>
  )
}
