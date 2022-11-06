import React, { useContext } from 'react'
import './style.css'
import context from '../../context/context'
const OverviewCard = () => {
  let { userRepos } = useContext(context)
  let data = userRepos.slice(0, 6)
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div className='col-6 mt-3'>
              <div className='card p-3 shadow'>
                <div className='card-title d-flex justify-content-between align-content-center '>
                  <a href='#' className='card-coder text-dark'>
                    {item.name}
                  </a>
                  <p className='fs-6'>Public</p>
                </div>
                <p className='card-description fs-6'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <div className='card-language '>
                  <div className='d-flex align-items-center'>
                    <span className='rounde '></span>
                    <p className='mb-0 ms-2'>{item.language}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default OverviewCard
