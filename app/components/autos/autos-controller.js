import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {

  showAutos() {
    console.log("autobots assemble")
    let autos = _autosService.getAutos()
    let template = ""
    autos.forEach(auto => {
      template += `
        <div class="col card">
          <img src="${auto.img}">
          <h5>${auto.make} - ${auto.model} ${auto.year}</h5>
          <p>Miles: ${auto.miles}</p>
          <p>Price: ${auto.price}</p>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }
  startAddAuto() {
    document.getElementById("form").innerHTML =
      `<form onsubmit="app.controllers.autosController.addAuto(event)">
      <div class="form-group">
        <label for="make">Make</label>
        <input type="text" name="make" />
      </div>
      <div class="form-group">
        <label for="model">Model:</label>
        <input type="text" name="model" />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" name="year" />
      </div>
      <div class="form-group">
        <label for="miles">Mile:</label>
        <input type="number" name="miles" />
      </div>
      <div class="form-group">
        <label for="PRICE">Price:</label>
        <input type="number" name="PRICE" />
      </div>
      <div class="form-group">
        <label for="img">Image:</label>
        <input type="url" name="img" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit">Add Auto</button>
    </form>`
  }

  addAuto(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      miles: form.miles.value,
      price: form.PRICE.value,
      description: form.description.value,
      img: form.img.value
    }
    _autosService.addAuto(formData)
    this.showAutos()
    form.reset()
    document.getElementById("form").innerHTML = ``
  }

}