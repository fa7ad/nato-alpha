import ref from './reference'

function translateToNato (input = '') {
  if (typeof input !== 'string') throw new Error('Need a string to translate.')

  const lowerInputList = input.toLowerCase().split('')
  const translatedLetters = lowerInputList.map(char => {
    let character = ref[char]
    if (!ref.hasOwnProperty(char)) character = char
    return character
  })

  return translatedLetters.join(' ').replace(/\n\s/g, '\n')
}

export default translateToNato
