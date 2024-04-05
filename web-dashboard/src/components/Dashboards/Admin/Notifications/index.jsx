import React from 'react'
import './index.css'

import { GrOverview } from "react-icons/gr"
import { FaHistory } from "react-icons/fa"
import { IoIosAlert } from "react-icons/io"
import { FaUserGroup, FaLocationDot, FaRegAddressCard, FaClipboardUser } from "react-icons/fa6"
import { TbListDetails } from "react-icons/tb"
import { ImSleepy2 } from "react-icons/im"
import { RiEmotionNormalFill } from "react-icons/ri"
import { BsSpeedometer } from "react-icons/bs"
import { GiDistraction } from "react-icons/gi"
import { VscHistory } from "react-icons/vsc"

const Notifications = () => {
  return (
    <>
      <div className='notif-container'>
        <div className='admin-notif-container'>
          <h3 className='admin-notif-heading'>Dashboards</h3>
          <p className='admin-notif-link'><GrOverview />Overview</p>
          <p className='admin-notif-link'><FaHistory />Driver History</p>
          <p className='admin-notif-link'><IoIosAlert />Biddings</p>
          <p className='admin-notif-link'><FaUserGroup />Customers</p>
        </div>
      </div>
    </>
  )
}

export default Notifications