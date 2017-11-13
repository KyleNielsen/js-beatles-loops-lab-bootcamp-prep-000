function theBeatlesPlay (musicians, instruments) {
  var musicPairs = []
  for (let i = 0; i < 4; i++) {
    musicPairs.push(musicians[i] + "plays" + instruments[i])
  }
  return musicPairs
}
