import Auto from "../../models/auto.js";

let _autos = []

export default class AutosService {
  addAuto(formData) {
    let newAuto = new Auto(formData)
    _autos.push(newAuto)
  }

  getAutos() {
    return _autos
  }
}