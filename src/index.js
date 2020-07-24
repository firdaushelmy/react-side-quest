import emojipedia from './emojipedia'

const newEmojipedia = emojipedia.map(emojiMeaning =>
  emojiMeaning.meaning.substring(0, 100))


console.log(newEmojipedia)
