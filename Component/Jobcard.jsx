import React from 'react'
import './Style/Jobcard.css'
import dayjs from 'dayjs'

function Jobcard(props) {
    const skills=["Javascript","React","Nodejs"]
    const date1=dayjs(Date.now());
    const diffInDays=date1.diff(props.postedOn,'day')
  return (
    <div className='Job-card'>
        <div className='outer-card'>
            <div className='firstdiv'>
                <h2>{props.title}- {props.company}</h2>
                <p>{props.type}. {props.experience}. {props.location}</p>
                <div className='skillstyling'>
                   {props.skills.map((skill)=>(
                    <p key={skill} className='skills'>{skill}</p>
                   ))}
                </div>
                </div> 
            <div className='right-card'>
             <p className='daystyle'>Posted {diffInDays}day ago</p>
            <a href={props.job_link}><button className='applybtn'>Apply</button></a>
            </div>
        </div>
    </div>
  )
}

export default Jobcard