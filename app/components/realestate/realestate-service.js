import RealEstate from "../../models/realestate.js";

let realEstatePlaces = [
  new RealEstate({ bedrooms: 5, bathrooms: 4, sqft: 1250, price: 250000, address: "123 abs", img: "https://picsum.photos/200/200/?random" })
]

export default class RealEstateService {
  addHouse(formData) {
    realEstatePlaces.push(new RealEstate(formData))

  }
  gethouses() {
    return JSON.parse(JSON.stringify(realEstatePlaces))
  }

}