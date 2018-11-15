export default class Auto {
  constructor(data) {
    if (!data.make || !data.model || !data.year || !data.price) {
      throw new Error("Invalid Auto Creation")
    }
    this._id = data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'Buy this Hunk o\'Junk'
    this.imgUrl = data.imgUrl
  }
}