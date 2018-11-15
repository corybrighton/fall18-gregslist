import Auto from "../../models/auto.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars/"
})

/**@type {Array<Auto>} */
let _autos = []

function handleError(err) {
  console.error(err)
  throw new Error(err)
}
export default class AutosService {
  addAuto(formData, fnToRunOnSuccess) {
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.post('', formData)
      .then(res => {
        //tell me via a callback 
        this.getAutos(fnToRunOnSuccess)
      }) // successful
      .catch(handleError)
  }
  getAutos(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        _autos = res.data.data.map(item => new Auto(item))
        fnToRunOnSuccess()
      })
      .catch(handleError)
  }

  destroyAuto(id, showAutos) {
    _api.delete(id)
      .then(res => {
        this.getAutos(showAutos)
      })
      .catch(handleError)
  }

  get autos() {
    return _autos
  }
}