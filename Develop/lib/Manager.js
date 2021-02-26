// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(office){
        const name = this.name;
        this.role = "Manager";
        const id = this.id;
        const email = this.email;

        super(name, id, email);
        this.office = office;
    }
}

module.exports = Manager;