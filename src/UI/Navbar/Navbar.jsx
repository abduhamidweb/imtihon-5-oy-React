import React, { useContext, useState, useEffect } from 'react'
import './style.scss'
import context from '../../context/context'
const Navbar = () => {
  const { sendUserName, sendUserData, sendFollowers,userData,loading } = useContext(context)
  let [useNameValue, setUserNameValue] = useState('')
  sendUserName(useNameValue)
  sendUserData(useNameValue)
  sendFollowers(useNameValue)
  return (
    <>
      <div className='container-fluid '>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark px-3'>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <a className='navbar-brand mt-2 mt-lg-0' href='#'>
              <img
                src='https://ih1.redbubble.net/image.994280595.8431/st,small,507x507-pad,600x600,f8f8f8.u1.jpg'
                height='45 '
                className='border rounded-9'
                alt='MDB Logo'
                loading='lazy'
              />
            </a>
            <input
              type='text'
              className='form-control w-25 bg-dark text-light btn-outline-dark border border-secondary py-0'
              placeholder='Enter is name'
              value={useNameValue}
              onChange={e => {
                setUserNameValue(e.target.value)
              }}
            />
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link text-light' href='#'>
                  Pull requests
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-light' href='#'>
                  Issues
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-light' href='#'>
                  Marketplace
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-light' href='#'>
                  Explore
                </a>
              </li>
            </ul>
          </div>
          <div className='d-flex align-items-center'>
            <div className='dropdown'>
              <a
                className='text-reset me-3 dropdown-toggle hidden-arrow'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fas fa-bell text-light'></i>
                <span className='badge rounded-pill badge-notification bg-danger'>
                  1
                </span>
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Some news
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another news
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className='dropdown'>
              <a
                className='dropdown-toggle d-flex align-items-center hidden-arrow'
                href='#'
                id='navbarDropdownMenuAvatar'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                {
                  loading ?    <img
                  src={userData.avatar_url}
                  className='rounded-circle fs-1'
                  height='25'
                  alt='Black and White Portrait of a Man'
                  loading='lazy'
                /> :""
             }
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuAvatar'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    My profile
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Settings
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
