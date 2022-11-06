import axios from 'axios'
const BASE_URL = 'https://api.github.com'
const API = {
  usersName: async user_Name => {
    if (user_Name.trim().length <= 0) {
      const res = await axios.get(`${BASE_URL}/users/abduhamidweb`)
      return res.data
    } else {
      const res = await axios.get(`${BASE_URL}/users/${user_Name}`)
      return res.data
    }
  },
  usersData: async user_Name => {
    if (user_Name.trim().length <= 0) {
      const res = await axios.get(`${BASE_URL}/users/abduhamidweb/repos`)
      return res.data
    } else {
      const res = await axios.get(`${BASE_URL}/users/${user_Name}/repos`)
      return res.data
    }
  },
  usersFollowers: async user_Name => {
    if (user_Name.trim().length <= 0) {
      const res = await axios.get(`${BASE_URL}/users/abduhamidweb/followers`)
      return res.data
    } else {
      const res = await axios.get(`${BASE_URL}/users/${user_Name}/followers`)
      return res.data
    }
  }
}
export default API
