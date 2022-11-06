import React,{useContext} from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import context from '../../context/context'
const Followers = () => {
  const {sendFollowers,infoFollowers}=useContext(context)
  return (
    <>
      <div className='container'>
        <div className='row'>
          <hr />
          {
            infoFollowers.map((item, index) => {
              return <FollowersCard key={index} data={ item} />
            })
        }
        </div>
      </div>
    </>
  )
}

export default Followers
