import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

    const[category,setCategory] = useState
  return (
    <div>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home
