export default class Job {
  constructor(data) {
    // if (!data.jobTitle || !data.hours) {
    //   throw new Error("Not enough Data To make")
    // }
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }
}