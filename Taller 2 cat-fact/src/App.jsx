import React from 'react'
import { Header, Button, Facts } from './components'
import { useApp } from './hooks/useApp.js'

export function App () {
  const {
    isLoading,
    isFirstTime,
    error,
    catImg,
    catFact,
    handleBTN
  } = useApp()

  if (isLoading) {
    return (
      <div>
        <Header title='Cat Facts' />
        <img className='Gifcat' src='./src/Assets/Gifcat.gif' alt='Loading Gif' />
      </div>
    )
  }

  return (
    <div>
      <Header title='Cat Facts' />
      <main>
        <Facts text={catFact} img={catImg} error={error} isFirstTime={isFirstTime} />
        <Button title='New fact' onClick={handleBTN} />
      </main>
    </div>
  )
}
