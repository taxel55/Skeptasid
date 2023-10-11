import React from 'react'
import '../Style/home.css'
import YtLogo from '../assets/youtube-logo.png'
import SpotifyLogo from '../assets/spotify-logo.png'

function Home() {
  return (
    <>
    <div className='main'>
      <div className='home-container'>




        {/* Categories Start */}
        <h2 className='section-title'>Our Product</h2>

        <div className='product-categories-container'>
          <div className='categories-card'>
            <img src={YtLogo} className='categories-img'></img>
            <h4 className='categories-title'>Youtube Premium Via- Reedem Code</h4>

          </div>

          <div className='categories-card'>
            <img src={SpotifyLogo} className='categories-img'></img>
            <h4 className='categories-title'>Spotify Premium Via- Reedem Code</h4>

          </div>
        </div>

        

      </div>
    </div>
    </>
    
    
  )
}

export default Home