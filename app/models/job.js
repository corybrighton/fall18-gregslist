export default class Job {
  constructor(data) {
    if (!data.jobTitle || !data.town) {
      throw new Error("Not enough Data To make")
    }
    this.jobTitle = data.jobTitle
    this.town = data.town
  }
}