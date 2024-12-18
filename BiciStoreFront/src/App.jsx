import { useState } from 'react'
import HomePage from './pages/homePage/HomePage'
import { BikeProvider } from './context/BikesContext'

function App() {

  return (
    <>
    <BikeProvider>

      <HomePage />
    </BikeProvider>
    </>
  )
}

export default App
