import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <>
      <div className='container'>
        <hr />
        <div className='row align-items-center'>
          <div className='col-4 fs-5 d-flex align-items-center'>
            <i class='bi bi-github fs-3 mx-2'></i>@2022 github ick
          </div>
                  <div className='col-8'>
                      <ul className='footer d-flex justify-content-around align-items-center mb-0'>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy
</a></li>
                        <li><a href="#">Security
</a></li>
                        <li><a href="#">Status
</a></li>
                        <li><a href="#">Docs
</a></li>
                        <li><a href="#">Contact GitHub</a></li>
                        <li><a href="#">Pricing
</a></li>
                      </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
