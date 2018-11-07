import AutosController from "./components/autos/autos-controller.js";
import RealestateController from "./components/realestate/realestate-controller.js";
import JobsController from "./components/jobs/jobsController.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      realEstateController: new RealestateController(),
      jobsController: new JobsController()
    }
  }
}


window.app = new App()
