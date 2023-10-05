const IMG_URL = 'https://cataas.com/cat/says/'
const FACT_URL = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
  try {
    const response = await fetch(FACT_URL)

    if (!response.ok) {
      throw new Error('Error fetching data from API')
    }

    const data = await response.json()
    const newFact = data.fact

    return newFact
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export const fetchImg = async ({ newImgText }) => {
  try {
    const response = await fetch(`${IMG_URL}${newImgText}?json=true`)

    if (!response.ok) {
      throw new Error('Error fetching data from API')
    }

    const data = await response.json()
    const newImg = 'https://cataas.com' + data.url

    return newImg
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
