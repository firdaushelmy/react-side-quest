import emojipedia from './emojipedia';

// another method for the emojipedia map function in index.js

function meaningOnly(x) {
  return (
    x.meaning
  )
}

const meaningTrunk = emojipedia.map(meaningOnly)

console.log(meaningTrunk)
