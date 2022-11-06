import React, { useContext } from 'react'
import OverviewCard from '../OverviewCards/OverviewCard'
import context from '../../context/context'
import Loadin from '../loading/Loadin'
const Overview = () => {
  let { loading } = useContext(context)
  return (
    <>
      <div className='container'>
        {
          loading ?       <div className='card_top d-flex justify-content-between align-content-center'>
          <h5 className='card-reposit'>Popular repositories</h5>
          <a href='#' className='fs-5'>
            Custtomber
          </a>
        </div>:""
  }
        <div className='row'>{loading ? <OverviewCard /> : <Loadin/>}</div>
      </div>
    </>
  )
}

export default Overview
