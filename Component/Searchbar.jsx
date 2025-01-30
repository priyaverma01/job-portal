import React from 'react'
import './Style/Searchbar.css'

function Searchbar() {
  return (
    <div className='selector-container'>
        <select className='selectors'>
            <option value="" disabled hidden>Job Role</option>
            <option value="IOS developer" >IOS developer</option>
            <option value="Frontend developer" >Frontend developer</option>
            <option value="Backend developer" >Backend developer</option>
            <option value="Full stack developer" >Full stack developer</option>
      </select>

      <select className='selectors'>
            <option value="" disabled hidden>Location</option>
            <option value="Pune" >Pune</option>
            <option value="Indore" >Indore</option>
            <option value="Chennai" >Chennai</option>
            <option value="Banglore" >Banglore</option>
      </select>

      <select className='selectors'>
            <option value="" disabled hidden>Job Type</option>
            <option value="Full-Time" >Full-Time</option>
            <option value="Part-time" >Part-time</option>
            <option value="Hybrid" >Hybrid</option>
            <option value="Remote" >Remote</option>
      </select>

      <select className='selectors'>
            <option value="" disabled hidden>Experience</option>
            <option value="Fresher" >Fresher</option>
            <option value="0-1" >0-1</option>
            <option value="2-5" >2-5</option>
            <option value="3-10" >3-10</option>
      </select>
      <button className='search-btn'>Search</button>
    </div>
  )
}

export default Searchbar