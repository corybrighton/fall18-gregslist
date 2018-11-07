export default class RealEstate {
  constructor(data) {
    if (!data.bedrooms || !data.bathrooms || !data.sqft || !data.address || !data.price || !data.img) {
      throw new Error("Not enough to List a house")
    }
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.address = data.address
    this.img = data.img
  }
}