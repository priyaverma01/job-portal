import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Searchbar from './Component/Searchbar'
import './App.css'
import Jobcard from './Component/Jobcard'
import jobData from './jobdummydata'
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Searchbar/>
     
      {jobData.map((job)=>(
        <Jobcard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App
