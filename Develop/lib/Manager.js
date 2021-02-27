// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(office){
        const name = this.name;
        const id = this.id;
        const email = this.email;

        super(name, id, email);
        this.office = office;
        this.role = "Manager";
    }
}

module.exports = Manager;