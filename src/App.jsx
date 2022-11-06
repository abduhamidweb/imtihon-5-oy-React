import { useState, useEffect } from 'react'
import ControlPages from './components/ControlPages/ControlPages'
import Sidbar from './components/Sidbar/Sidbar'
import Navbar from './UI/Navbar/Navbar'
import Routee from './router/index'
import API from './API/API'
import context from './context/context'
import Footer from './UI/Footer/Footer'
const App = () => {
  const [userData, setUserData] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [infoFollowers, setInfoFollowers] = useState([])
  const [loading, setLoading] = useState(false)

  const sendUserName = async userNamee => {
    const res = await API.usersName(userNamee)
    setUserData(res)
    setLoading(true)
  }

  const sendUserData = async userData => {
    const res = await API.usersData(userData)
    setUserRepos(res)
    setLoading(true)
  }
  const sendFollowers = async userFollow => {
    const res = await API.usersFollowers(userFollow)
    setInfoFollowers(res)
    setLoading(true)
  }

  useEffect(() => {
    sendUserName()
    sendUserData()
    sendFollowers()
  }, [])

  return (
    <>
      <context.Provider
        value={{
          userData,
          sendUserName,
          sendUserData,
          sendUserData,
          sendFollowers,
          userRepos,
          infoFollowers,
          sendFollowers,
          loading
        }}
      >
        <Navbar />

        <ControlPages />
        <div className='container-fluid qwerty '>
          <div className='row'>
            <div className='col-3'>
              <Sidbar />
            </div>
            <div className='col-9'>
              <Routee />
            </div>
          </div>
        </div>
        <Footer />
      </context.Provider>
    </>
  )
}
export default App
//  npm i react-router-dom@6 sass axios
