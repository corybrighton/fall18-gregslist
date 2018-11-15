import RealEstateService from "./realestate-service.js";

let _realService = new RealEstateService()

export default class RealestateController {

  showHousing() {
    _realService.getHouses(this.showHouses)
  }

  showHouses() {
    console.log("Haunted House Hunting")
    let template = ""
    _realService.houses.forEach(house => {
      template += `<div class="card col-3 my-1">
            <img class="card-img-top" src="${house.imgUrl}">
            <div class="card-body">
              <h5 class="card-title">${house.bedrooms} bed - ${house.bathrooms} bath</h5>
              <h5> ${house.levels} levels ${house.year}</h5>
              <div class="card-text">
                <p>Price: $${house.price}</p>
                <p>${house.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.realEstateController.destroyHouse('${house._id}')"></i>
                </div>
              </div>
            </div>
        </div>`
    });
    document.getElementById("main-content").innerHTML = template
  }

  startAddHouse() {
    document.getElementById("form").innerHTML = `
    <form onsubmit="app.controllers.realEstateController.addHouse(event)">
          <div class="form-group">
            <label for="bedrooms">Bedrooms</label>
            <input type="number" name="bedrooms">
          </div>
          <div class="form-group">
            <label for="bathrooms">Bathrooms</label>
            <input type="number" name="bathrooms">
          </div>
          <div class="form-group">
            <label for="levels">Levels</label>
            <input type="number" name="levels">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" name="price">
          </div>
          <div class="form-group">
            <label for="year">Year</label>
            <input type="number" name="year">
          </div>
          <div class="form-group">
            <label for="imgUrl">Image</label>
            <input type="url" name="imgUrl">
          </div>
          <button type="submit">Add Real Estate</button>
        </form>`
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: form.price.value,
      levels: form.levels.value,
      imgUrl: form.imgUrl.value
    }
    _realService.addHouse(formData, this.showHouses)
    this.showHouses()
    form.reset()
    document.getElementById("form").innerHTML = ''
  }

  destroyHouse(id) {
    _realService.destroyHouse(id, this.showHouses)
  }
}