const db = require("./conn");
bcrypt = require("bcryptjs");

class User {
  constructor(id, job_id, bookmark_id, name, email, password) {
    this.id = id;
    this.job_id = job_id;
    this.bookmark_id = bookmark_id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }

  async save() {
    try {
      const response = await db.one(
        `
            insert into users 
                (email, password) 
            values 
                ($1, $2) 
            returning email
            `,
        [this.name, this.email, this.password]
      );
      console.log("user was created with id:", response.id);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  async addUser() {
    try {
      const response = await db.one(
        "INSERT INTO applicants (name, email, password) VALUES ($1, $2, $3) RETURNING id;",
        [this.name, this.email, this.password]
      );
      return response;
      console.log(response);
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }

  async loginUser() {
    try {
      const response = await db.one(
        `SELECT id, name, password FROM applicants WHERE email = $1;`,
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
