import './App.css'
import Header from './components/header'
import { useNavigate } from 'react-router-dom'
import { api } from './constants/api'
import { useEffect } from 'react'
function App() {
  const nav = useNavigate()

  async function getUsers() {
    try {
      const results = await api.get('/users')
      console.log(results.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getUsers()
  },[])
  return (
    <div>
      <Header />
      <div className='goTocontainer'>
        <button onClick={()=>{nav('/feed')}}>
          <img src='./logos/feed.svg' /><h4>Feed</h4>
        </button>
        <button onClick={()=>{nav('/user')}}>
          <img src='./logos/users.svg' /><h4>Top Users</h4>
        </button>
        <button onClick={()=>{nav('/trending')}}>
          <img src='./logos/trending.svg' /><h4>Trending</h4>
        </button>
      </div>
    </div>     
  )
}

export default App
