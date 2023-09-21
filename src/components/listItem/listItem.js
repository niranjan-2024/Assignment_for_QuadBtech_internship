import React from 'react'
import "./listItem.css"

function listItem() {
  return (
    <div className='crypto'>
      <div>1</div>
      <div style={{cursor:"pointer"}}>WazirX</div>
      <div>₹ 22,88,021</div>
      <div>₹ 22,88,047 / ₹ 23,04,216</div>
      <div className='loss'>-9.44 %</div>
      <div className='loss'>▼ ₹ 2,38,466</div>
    </div>
  )
}

export default listItem