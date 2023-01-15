import React from 'react'
import Banner from '../components/Banner'
import Bodypart from '../components/Bodypart'
import Search from '../components/Search'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Search/>
      <Bodypart/>
    </div>
  )
}
