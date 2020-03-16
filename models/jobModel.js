const db = require('./conn');


class jobModel {
    constructor(
        job_id,
        bookmark_id,
        title,
        job_description,
        company,
        date_posted,
        compensation,
        name,
        email,
    ) {
        this.job_id = job_id;
        this.bookmark_id = bookmark_id;
        this.title = title,
            this.job_description = job_description;
        this.company = company;
        this.date_posted = date_posted;
        this.compensation = compensation;
        this.name = name;
        this.email = email;
    }

    static async getAllJobs() {
        try {
            const response = await db.any(`SELECT * FROM jobs;`);
            return response;
        } catch (error) {
            // dev test
            console.log("ERROR: ", error);
            return error;
        }
    }
    static async getAllApplicants() {
        try {
            const response = await db.any(`SELECT id, name FROM applicants;`);
            return response;
        } catch (error) {
            // dev test
            console.log("ERROR: ", error);
            return error;
        }
    }

    // Sort by ascending order of posted date
    static async getJobsAscend() {
        try {
            const response = await db.any(`SELECT * FROM jobs ORDER BY date_posted ASC`);
            // for dev testing -- remove when prod
            console.log(response);
            return (response);
        } catch (error) {
            // dev testing purposes
            console.error('ERROR: ', error);
            return error;
        }
    }

    // Sort by descending order of posted date
    static async getJobsDescend() {
        try {
            const response = await db.any(`SELECT * FROM jobs ORDER BY date_posted DESC`);
            // Dev test
            console.log(response);
            return (response);
        } catch (error) {
            // dev test
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getOneJob(id) {
        try {
            const response = await db.any(`SELECT * FROM jobs WHERE jobs.id = ${id};`);
            return response
        } catch (error) {
            console.log("ERROR: ", error);
            return error;
        }
    }
}

module.exports = jobModel;