import React from 'react'
import Navbar from './Navbar'
import Navroutes from './Routes/Navroutes'

const Home = () => {
  return (
    <div>
      <div className='container box'>
        <div className='row'>
          <div className='col-12'>
            <p className='text text-center'>India's #1 Job Searching Platform</p>
            <div className='text2 text-center'>Your Job search ends here</div>
            <div className='text3 text-center'>Discover career opportunities</div>
            <div className='searchBar'>
              <input type='text' className='searchText' placeholder='Search by "skill"' />
              <input type='text' className='searchLocation' placeholder='Job Location' />
              <button className='searchButton'>Search jobs</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home