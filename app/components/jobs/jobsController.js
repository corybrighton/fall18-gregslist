import JobsService from "./jobsService.js";

let _jobsService = new JobsService

export default class JobsController {
  showJobs() {
    console.log("new Jobs")
    let jobs = _jobsService.getJobs()
    let template = "<div class = 'd-flex flex-column'"
    jobs.forEach(job => {
      template += `
      <p>
        <a href = "">${job.jobTitle} (${job.town})</a>
      </p>`
    });
    document.getElementById("main-content").innerHTML = template
  }
  startAddJob() {
    document.getElementById("form").innerHTML = `
    <form onsubmit="app.controllers.jobsController.addJob(event)">
          <div class="form-group">
            <label for="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" />
          </div>
          <div class="form-group">
            <label for="town">Town</label>
            <input type="text" name="town" />
          </div>
          <button type="submit">Add Job</button>
        </form>`
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      jobTitle: form.jobTitle.value,
      town: form.town.value
    }
    _jobsService.addJob(formData)
    this.showJobs()
    form.reset()
    document.getElementById("form").innerHTML = ''
  }
}