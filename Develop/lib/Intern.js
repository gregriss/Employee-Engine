// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        const name = this.name;
        this.role = "Intern";
        const id = this.id;
        const email = this.email;

        super(name, id, email, role);
        this.school = school;
    }
}

module.exports = Intern;