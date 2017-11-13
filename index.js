function theBeatlesPlay (musicians, instruments) {
  var musicPairs = []
  for (let i = 0; i < 4; i++) {
    musicPairs.push(musicians[i] + " plays " + instruments[i])
  }
  return musicPairs
}

function johnLennonFacts (facts) {
  var newFacts = []
  while (facts.length > 0) {
    newFacts.push (facts[0] + "!!!")
    facts.shift()
  }
}