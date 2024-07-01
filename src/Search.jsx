import React, { useEffect, useState } from 'react'
import './Search.css'

function Search() {
    const [data,setData] = useState([])
    const [filtered,setFilteredData] = useState([])
     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
            setFilteredData(data)
     })
        .catch(err => console.log(err))
    },[])

    const handleChange = (value)=>{
        const res = filtered.filter(f=> f.name.toLowerCase().includes(value)) 
        setData(res)
    }

  return (
    <div className='search'>
        <div className="search-item">
        <input type="text" placeholder='Search Name here ...' onChange={e=>handleChange(e.target.value)}/>
        </div>
        <div className="results">
            {data.map((d,i)=>(
                <div key={i}>
                    <div>{d.name}</div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Search
