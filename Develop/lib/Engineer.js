// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        const name = this.name;
        this.role = "Engineer";
        const id = this.id;
        const email = this.email;

        super(name, id, email, role);
        this.github = github;
    }
}

module.exports = Engineer;