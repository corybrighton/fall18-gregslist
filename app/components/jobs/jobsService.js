import Job from "../../models/job.js";

let _jobs = [new Job({ jobTitle: "Lion Tainer", town: "New York" })]
export default class JobsService {
  addJob(formData) {
    _jobs.push(formData)
  }
  getJobs() {
    return JSON.parse(JSON.stringify(_jobs))
  }

}