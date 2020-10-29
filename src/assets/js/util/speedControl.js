export default class SpeedControl {
  maxSpeed = 1
  average = 0
  speedLevel = 0.2
  start = 120
  end = 200

  uniformSpeed () {
    const speedData = []
    for (let start = 0; start < this.end; start += 0.2) {
      speedData.push(start)
    }
    return speedData
  }
}
