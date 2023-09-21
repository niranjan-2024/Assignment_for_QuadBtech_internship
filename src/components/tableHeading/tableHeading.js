import React from 'react';
import "./tableHeading.css"

function tableHeading() {
  return (
    <div className='tableHeading'>
      <div>#</div>
      <div>Platform</div>
      <div>Last Traded Price</div>
      <div>Buy / Sell Price</div>
      <div>Difference</div>
      <div>Savings</div>
    </div>
  )
}

export default tableHeading