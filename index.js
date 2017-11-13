function theBeatlesPlay (musicians, instruments) {
  musicPairs = []
  for (let i = 0, i < 4, i++) {
    musicPairs.push("${musicians} plays ${instruments}")
  }
  return musicPairs
}
