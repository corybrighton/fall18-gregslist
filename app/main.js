import AutosController from "./components/autos/autos-controller.js";
import RealestateController from "./components/realestate/realestate-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      realEstateController: new RealestateController(),
      // JobsController
    }
  }
}


window.app = new App()
