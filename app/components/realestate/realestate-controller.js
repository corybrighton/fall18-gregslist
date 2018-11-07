import RealEstateService from "./realestate-service.js";

let _realService = new RealEstateService()
export default class RealestateController {

  showHouses() {
    console.log("Here is houses")
    let houses = _realService.gethouses()
    let template = ""
    houses.forEach(house => {
      template += `<div>
        <img src = "${house.img}">
        <h5>${house.price}</h5>
        <p>bd:${house.bedrooms}<p>
        <p>bt:${house.bathrooms}<p>
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
            <label for="sqft">sqft</label>
            <input type="number" name="sqft">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" name="price">
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" name="address">
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input type="url" name="image">
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
      sqft: form.sqft.value,
      price: form.price.value,
      address: form.address.value,
      img: form.image.value
    }
    _realService.addHouse(formData)
    this.showHouses()
    form.reset()
    document.getElementById("form").innerHTML = ''
  }
}