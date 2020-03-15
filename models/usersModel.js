const db = require("./conn");

class User {
  constructor(id, job_id, bookmark_id, name, email, password) {
    this.id = id;
    this.job_id;
    this.bookmark_id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  async addUser() {
    console.log("adding user", this.name);
  }

  async loginUser() {
    console.log("loging in user");
  }
}
module.exports = User;
