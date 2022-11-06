import React from 'react'
import './style.css'
const FollowersCard = ({data}) => {
  return (
      <>
          
      <div className='col-10 d-flex align-content-center mt-3'>
        <div className='card-imgs'>
          <img
            src={data.avatar_url}
            className='rounded-img'
            alt=''
          />
        </div>
        <div className='card-descript w-100 ms-4'>
          <div className='card-text-title d-flex justify-content-between '>
            <div className='d-flex align-items-end'>
              <h5>{data.login }</h5>{' '}
              <h6 className='ms-2 text-secondary'>Rasulwebs</h6>
            </div>
            <button className='btn bg-secondary text-light'>Unfollow</button>
                  </div>
                  <p className="description text-secondary fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className='text-secondary'><i className="bi bi-geo-alt"></i> Uzbekistan, Tashkent</p>
        </div>
          </div>
          <hr />
    </>
  )
}

export default FollowersCard
