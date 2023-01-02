import React, {useState, useEffect} from 'react'

export default function Dashboard({user}) {
    const [chars,setChars] = useState([])
    const getChars = async () => {
        const res = await fetch('http://127.0.0.1:5000/get', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const data = await res.json()
        console.log(data)
        if(data.status === 'ok') {
            setChars(data.data)
        }
    }
    useEffect(()=>{
        getChars()
    }, [])
    
  return (
    <div>Dashboard</div>
    
  )
}
    