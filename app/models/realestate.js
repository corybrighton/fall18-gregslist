export default class RealEstate {
  constructor(data) {
    // if (!data.bedrooms || !data.levels || !data.year || !data.price || !data.imgUrl) {
    //   throw new Error("Not enough to List a house")
    // }
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || "Your house dreams"
  }
}