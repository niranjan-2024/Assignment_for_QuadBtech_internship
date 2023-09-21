import React from 'react'
import "./newsBar.css"

function newsBar() {
  return (
    <div className='newsBar'>
      <div className="time">
        0.1 % <br/> 5min
      </div>

      <div className="time">
      0.1 % <br/> 5min
      </div>

      <div className="fullTime">
          Best Price to Trade<br/>
          ₹ 24,24,659<br/>
          Average BTC/INR net price including commission
      </div>

      <div className="time">
      0.1 % <br/> 5min
      </div>

      <div className="time">
      0.1 % <br/> 5min
      </div>
    </div>
  )
}

export default newsBar