import emojipedia from './emojipedia'

const newEmojipedia = emojipedia.map(function (emojiMeaning) {
  return (
    emojiMeaning.meaning.substring(0, 100)
  )
})

console.log(newEmojipedia)
