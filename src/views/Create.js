import React from 'react'


export default function Create( {user} ) {
    const sendForm= async (e) => {
        e.preventDefault()
        const name = e.target.character_name.value
        const comics = e.target.comics_appeared_in.value
        const power = e.target.power.value
        const description = e.target.description.value
        const res = await fetch("http://127.0.0.1:5000/add", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description,
                comics: comics,
                power:power
            }),
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Bearer ${user.token}`
            }
        }) 
        const data = await res.json()
       
        console.log(data)   
        
    }    
  return (
    <div>Create
        <form onSubmit = {(e) => {sendForm(e)}}>

        <input type='text' name="character_name"placeholder='Character name'/>
        <input type='text' name="description"placeholder='description?'/>
        <input type='text' name="power"placeholder='power'/>
        <input type='text' name="comics_appeared_in"placeholder='comics appeared in?'/>
        <button>Submit</button>
        </form>
        

        
    </div>
  )
}


