import React, { useContext } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import context from '../../context/context'
const Sidbar = () => {
  const { userData, loading } = useContext(context)
  return (
    <>
      {loading ? (
        <div className='sidebar_wrapp '>
          <div className='acc_img'>
            <img
              src={userData.avatar_url}
              alt=''
              className='rounded-9 mx-auto avatar-img'
            />
          </div>
          <h2 className='acc_name'>{userData.name}</h2>
          <p className='acc_userName'>@{userData.login}</p>

          <p className='acc_desc '>{userData.bio}</p>
          <button className='btn btn-secondary w-100'>Edit Profile</button>
          <div className='follow_wrapp d-flex'>
            <span className='followers'>
              <Link to='/followers' className='fol'>
                <i className='bi bi-people'></i>
                <span className='follower_length px-1'>
                  {userData.followers}
                </span>
                <span className='ss'>followers</span>
              </Link>
            </span>{' '}
            ·
            <span className='following'>
              <Link to='/following' className='fol'>
                <span className='following_length px-1'>
                  {userData.following}
                </span>
                <span className='ss'>following</span>
              </Link>
            </span>
          </div>

          <div className='acc_info d-flex flex-column mt-3'>
            <a href='#' className='fol '>
              <i className='bi bi-building px-1'></i>
              <span className='ss ms-1'>{userData.company} </span>
            </a>

            <a href='#' className='fol mt-2'>
              <i class='bi bi-geo-alt-fill px-1'></i>

              <span className='ss ms-1'>{userData.location}</span>
            </a>

            <a href='#' className='fol mt-2'>
              <i class='bi bi-globe2 px-1'></i>
              <span className='ss'>{userData.blog}</span>
            </a>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Sidbar
