import React, { useCallback, useEffect, useState, useRef } from 'react'
import debounce from 'just-debounce-it'
import { fetchImg, fetchFact } from '../services/fetch'

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [catImg, setCatImg] = useState('')
  const [catFact, setCatFact] = useState('')

  const isFirstTime = useRef(true)

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = catFact === ''
    }
  }, [catFact])

  useEffect(() => {
    console.log('getFact')
  }, [])

  useEffect(() => {
    console.log('getImg')
  }, [])

  const handleBTN = () => {
    setIsLoading(true)
    getFact()
  }

  const getFact = useCallback(
    debounce(() => {
      fetchFact()
        .then(newFact => {
          setCatFact(newFact)
          const newImgText = newFact.split(' ').slice(0, 4).join(' ')
          getImg(newImgText)
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }, 400),
    []
  )

  const getImg = useCallback(
    debounce(newImgText => {
      fetchImg({ newImgText })
        .then(newImg => setCatImg(newImg))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }, 400),
    []
  )

  return {
    isLoading,
    catImg,
    catFact,
    isFirstTime,
    error,
    handleBTN
  }
}
