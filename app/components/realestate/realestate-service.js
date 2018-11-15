import RealEstate from "../../models/realestate.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})
let _realEstatePlaces = []

function handleError(err) {
  throw new Error(err)
}

export default class RealEstateService {
  destroyHouse(id, showHouses) {
    _api.delete(id)
      .then(res => {
        this.getHouses(showHouses)
      })
      .catch(handleError)
  }
  addHouse(formData, successFunc) {
    if (!formData) { handleError }
    if (typeof (successFunc) != "function") { handleError("House function Error") }

    _api.post('', formData)
      .then(res => { this.getHouses(successFunc) })
      .catch(handleError)
  }

  getHouses(successFunc) {
    if (typeof successFunc != 'function') { handleError("Need a function") }
    _api.get('')
      .then(res => {
        _realEstatePlaces = res.data.data.map(house => new RealEstate(house))
        successFunc()
      })
      .catch(handleError)
  }

  get houses() {
    return _realEstatePlaces
  }

}