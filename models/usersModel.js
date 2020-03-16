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
    try {
      const response = await db.one(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id;",
        [this.name, this.email, this.password]
      );
      return response;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }

  async loginUser() {
    try {
      const response = await db.one(
        `SELECT id, name, password FROM users WHERE email = $1;`,
        [this.email]
      );
      console.log("response is", response);
      const isValid = this.checkpassword(response.password);
      if (!!isValid) {
        const { id, name } = response;
        return { isValid, id, name };
      } else {
        return { isValid };
      }
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }
}
module.exports = User;
