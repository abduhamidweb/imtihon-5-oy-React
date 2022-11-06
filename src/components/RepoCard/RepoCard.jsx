import React from 'react'
import './styleRepoCard.css'
const RepoCard = ({ data }) => {
  
  return (
    <>
      <div className='col-12 mt-3'>
        <div className='card border-none shadow-none mb-2'>
          <div className='card_titles d-flex align-items-center justify-content-between'>
            <div className='left-titles'>
              <span className='fs-3'>{data.name}</span>
              <span className='fs-6 border border-1 rounded-8 px-2 ms-2'>
                Public
              </span>
            </div>
            <div className='right-btn'>
              <button className='btn btn-secondary py-1'>
                <i class='bi bi-star'></i> Star
              </button>
            </div>
          </div>
          <div className='card-languages d-flex align-items-center'>
            <span className='circlee  d-block'></span>
            <span className='type-card ms-2'>{data.language}</span>
            <p className='updated ms-3 py-0 my-0 text-secondary'>
              Updatet 1100 hours ago
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default RepoCard
