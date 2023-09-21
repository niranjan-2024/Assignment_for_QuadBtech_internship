import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./navbar.scss";
import {BiLogoTelegram} from "react-icons/bi"

function Navbar() {

  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className='navbar'>
      <div className='heading'>HODLINFO</div>

      <div>
          <select>
            <option value="INR">INR</option>
          </select>
          <select>
            <option value="BTC">BTC</option>
          </select>
          <button>BUY BTC</button>
      </div>

      <div>
        <div style={{color:"white",marginTop:"10px"}}>
          <CountdownCircleTimer
            isPlaying
            duration={60}
            strokeWidth={4}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            size={40}
            colors="#A30000"
          >
          {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>

        <div>
        <button style={{backgroundColor:"#3dc6c1",fontWeight:"600",fontSize:"15px",marginRight:"50px"}}><BiLogoTelegram/>Connect Telegram</button>
        </div>
        
        <div style={{marginTop:"10px"}}>
        <input id="cb_id" class="toggle-round" type="checkbox"></input>
        <label for="cb_id"></label>
        </div>
      </div>
    </div>
  )
}

export default Navbar