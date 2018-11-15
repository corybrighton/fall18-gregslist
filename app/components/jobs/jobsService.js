import Job from "../../models/job.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs/"
})

function handleError(err) {
  console.error(err)
}

let _jobs = [new Job({ jobTitle: "Lion Tainer", town: "New York" })]
export default class JobsService {
  destroyJob(id, showJobs) {
    _api.delete(id)
      .then(res => this.getJobs(showJobs))
      .catch(handleError)
  }

  getJobs(success) {
    if (typeof success != 'function') { handleError("did not get a funtion in Jobs") }
    _api.get('')
      .then(res => {
        _jobs = res.data.data.map(job => new Job(job))
        success()
      })
      .catch(handleError)
  }

  addJob(formData, success) {
    if (!formData) { handleError("no data for job") }
    if (typeof success != 'function') { handleError("Need a function") }
    _api.post('', formData)
      .then(res => {
        this.getJobs(success)
      })
      .catch(handleError)
  }

  get jobs() {
    return _jobs
  }

}