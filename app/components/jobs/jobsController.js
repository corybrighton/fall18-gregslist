import JobsService from "./jobsService.js";

let _jobsService = new JobsService

export default class JobsController {
  startShowJobs() {
    console.log('Work work work')
    _jobsService.getJobs(this.showJobs)
  }
  showJobs() {
    let template = ""
    _jobsService.jobs.forEach(job => {
      template += `
      
      <div class = "col-12">
        <a href = "">${job.jobTitle} (${job.company}) ${job.description}</a><i class="fa fa-fw fa-trash action muted" onclick="app.controllers.jobsController.destroyJob('${job._id}')"></i>
      </div>`
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
            <label for="company">Company</label>
            <input type="text" name="company" />
          </div>
          <div class="form-group">
            <label for="hours">Hours</label>
            <input type="number" name="hours" />
          </div>
          <div class="form-group">
            <label for="rate">Rate</label>
            <input type="number" name="rate" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="textfield" name="description" />
          </div>
          <button type="submit">Add Job</button>
        </form>`
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobsService.addJob(formData, this.showJobs)
    form.reset()
    document.getElementById("form").innerHTML = ''
  }

  destroyJob(id) {
    _jobsService.destroyJob(id, this.showJobs)
  }
}