function theBeatlesPlay (musicians, instruments) {
  musicPairs = []
  for (var i = 0, i < musicians.length, i++) {
    musicPairs.push("${musicians} plays ${instruments}")
  }
  return musicPairs
}