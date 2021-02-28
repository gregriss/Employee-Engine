const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// creating array where employee objects will be stored
const employees = [];

// Using inquirer to gather information about the development team members
function initialize() {
    inquirer
        .prompt(
            {
                type: 'confirm',
                message: 'Would you like to add a team member?',
                name: 'add' 
            }
        ).then((answer) => {
            if(answer.add) {
                addEmployee();
            }
            else {
                fs.writeFile(outputPath, render(employees), function(err) {
                    if (err) {throw err};
                });
            };
        });
};

// Finding out what type of employee user wants to enter
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is your role?',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'role'
            }
        ]).then(answer => {
            console.log(answer);

            // and to create objects for each team member (using the correct classes as blueprints!)
        
            if (answer.role === 'Manager') {
                addManager();
                
            }
            else if (answer.role === 'Engineer') {
                console.log("You are an Engineer");
                addEngineer();
            }
            else if (answer.role === 'Intern') {
                console.log("You are an intern.");
                addIntern();
            };
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            }
            else {
                console.log("Something else went wrong");
            }
        });
};


// function to add a manager
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your id?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber'
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            employees.push(manager);
            initialize();
        })
};
// function to add an Engineer
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your id?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github'
            }
        ]).then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(engineer);
            employees.push(engineer);
            initialize();
        });
};
// function to add an Intern
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your id?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What school do you attend?',
                name: 'school'
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(intern);
            employees.push(intern);
            initialize();
        });
};
initialize();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render(employees);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```