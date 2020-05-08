// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  // A list of all robot names used.
  nameHistory = []

  // A private robot name.
  #name = ''

  constructor () {
    this.#name = this.newUniqueName()
  }

  /**
   * A getter to return the "name" of the current robot.
   *
   * @return {string|*}
   */
  get name () {
    return this.#name
  }

  /**
   * Create the random name for the robot in the format of two uppercase letters
   * followed by three digits, such as RX837 or BC811.
   *
   * @return {string}
   */
  randomName () {
    let name = ''

    // Generate the first two alpha-numeric characters.
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 2; i++) {
      name += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    // Generate the remaining three random numbers.
    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10).toString()
    }

    return name
  }

  /**
   * Generate a new Unique name for a robot.
   *
   * @return {string}
   */
  newUniqueName () {
    const name = this.randomName()

    if (this.nameHistory.includes(name)) {
      return this.newUniqueName()
    } else {
      this.nameHistory.push(name)
      return name
    }
  }

  /**
   * Replace the current name with a new unique one.
   */
  reset () {
    this.#name = this.newUniqueName()
  }

}

Robot.releaseNames = () => { }
